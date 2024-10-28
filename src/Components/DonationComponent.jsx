import React from 'react'
import DonationCPTList from './DonationCPTList'
import { Link } from 'react-router-dom'

const DonationComponent = () => {
  return (
    <>
     <div className='donation'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <div className='text-center dt'>
                        <h2>DONATION</h2>
                        <h4>Your money will save our life</h4>
                    </div>
                </div>

              {DonationCPTList.map((data, index) => (
              <div className='col-lg-4 col-md-4' key={index}>
                  <div className={`ORGANIC ${index === 1 ? 'overbg' : ''} `}>
                    <img  src={data.imgsrc} alt={data.alt} />
                    <div className='organic-details'>
                       <h4>{data.heading}</h4>
                       <h2>{data.secondheading}</h2>
                       <h3>{data.thirdheading}</h3>
                       <p>{data.pragraph}</p>
                       <Link href={data.link} className='bgtreact'>{data.linkname}</Link>
                    </div>
                  </div> 
                </div> 
                ))}
            </div>
        </div>
     </div>
      
    </>
  )
}

export default DonationComponent
