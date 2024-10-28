import React, { useState } from 'react'

const ContactComponent = () => {
  
    const [data, setData] = useState ({
     fname : "",
     email : '',
     country : "",
     roll : "",
     bike : false,
     car : false,
     cycle : false,
     truck : false, 
     textaria : ""
    });

    const onchangehandle = (event) => {
        const { name, value, type, checked } = event.target;
        setData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value 
        }));
      };


      const onchangecountry = (event) => {
        setData(data => ({
          ...data,
          country: event.target.value
        }));
      };
    
      const onchangeroll = (event) => {
        setData(data => ({
          ...data,
          roll: event.target.value
        }));
      };
    
      function onsubmitdata(event) {
        event.preventDefault();
        alert(
          `
          Username: ${data.fname}
          Email: ${data.email}
          City : ${data.country}
          Gender: ${data.roll} 
          Bike: ${data.bike ? 'Yes' : 'No'}
          Car: ${data.car ? 'Yes' : 'No'}
          Cycle: ${data.cycle ? 'Yes' : 'No'}
          Truck: ${data.truck ? 'Yes' : 'No'}
          Text Message ${data.textaria}
          `
        );
      }

      


  return (
    <>
    
    <div className="container-fluid gallery1">
      <div className='row'>
        <div className='col-lg-12 col-md-12'>
            <div className='text-center dt'>
                <h2>Contact Form</h2> 
            </div>
        </div>
          <div className='col-lg-6 col-md-6'>
            <div className='form'>
                <form onSubmit={onsubmitdata}> 
                    <input className='textform' type='text' name='fname' value={data.fname} placeholder='Your Name ' required onChange={onchangehandle} /> <br /> 
                    <input className='textform' type='text' name='email' value={data.email} placeholder='Your Emial ' required  onChange={onchangehandle}  /> <br /> 

                    <select className='textform' name='country' value={data.country} required onChange={onchangecountry} >
                        <option value="">Country Name Here</option>
                        <option value="India"> India</option>
                        <option value="Pakistan"> Pakistan</option>
                        <option value="Nepal"> Nepak</option>
                        <option value="China">China</option>
                        <option value="Bhutan"> Bhutan</option>
                    </select> <br />

                    <p>Please Select One</p>  
                    <input type='radio' name='roll' value='man'  required checked={data.roll === 'man'}  onChange={onchangeroll}/> Man
                    <input type='radio' name='roll' value='woman' checked={data.roll === 'woman'} required onChange={onchangeroll}/> Woman  <br />  

                    <p>Do You Have Anything</p>
                    
                    <input type='checkbox' name='bike' value={data.bike} onChange={onchangehandle} /> BIke 
                    <input type='checkbox' name='car' value={data.car} onChange={onchangehandle} /> Car
                    <input type='checkbox' name='cycle' value={data.cycle} onChange={onchangehandle} /> Cycle
                    <input type='checkbox' name='truck' value={data.truck} onChange={onchangehandle} /> Truck   <br />  
                    
                    <textarea className='textform' name='textaria' value={data.textaria}  placeholder='Please Enter Anything' required  onChange={onchangehandle} /> <br />  

                    <button className='submit' type='submitdata'> Submit </button>
                </form>
            </div>
          </div>


          <div className='col-lg-6 col-md-6'>
            <div className='contect-right'>
                <h2>Username: <span> {data.fname} </span></h2>
                <h2> Email: <span>{data.email}</span></h2>
                <h2>City: <span>{data.country}</span></h2>
                <h2> Gender: <span>{data.roll}</span> </h2>
                <h2> Bike: <span>{data.bike ? 'Yes' : 'No'}</span></h2>
                <h2>Car: <span>{data.car ? 'Yes' : 'No'}</span></h2>
                <h2>Cycle: <span>{data.cycle ? 'Yes' : 'No'}</span></h2>
                <h2>Truck:<span> {data.truck ? 'Yes' : 'No'}</span></h2>
                <h2>Text Message <span>{data.textaria}</span></h2>  
            </div>
          </div>
      </div>
 </div>
      
    
    </>
  )
}

export default ContactComponent