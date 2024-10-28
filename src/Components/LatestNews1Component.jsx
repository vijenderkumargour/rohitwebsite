import React from 'react' 
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import LatestNews1CPTList from './LatestNews1CPTList';
import { Link } from 'react-router-dom';


const LatestNews1Component = () => {

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true, 
    disabled: 'owl-dots',
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  const modals = LatestNews1CPTList.map((data, index) => (
    <div className="modal fade" id={`exampleModal${index + 1}`} key={index} tabIndex="-1" aria-labelledby={`exampleModalLabel${index + 1}`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header1">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> <i className="fa-solid fa-xmark"></i> </button>
          </div>
          <img src={`img/news${index + 1}.jpg`} alt={`news${index + 1}`} />
        </div>
      </div>
    </div>
  ));
  
  return (
   
   
    <>
    
    <div className="Latestnews">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="text-center dt">
              <h2>News Section</h2>
              <p>Help today because tomorrow you may be the one who needs more helping!</p>
            </div>
          </div>

    
          <div className='col-lg-12 col-md-12'>
            <OwlCarousel className="latestnews1" {...options}>
            {LatestNews1CPTList.map((data, index) => (
            <div className='item' key={index}>
              <div className="latestnews"> 
              <Link type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${index + 1}`}>  

                <div className='bg-black'>
                <div className='imghover'>
                <i className="fa-solid fa-magnifying-glass-plus search"></i>
                  <img src={data.imgsrc} alt={data.alt} />
                  </div>
                </div>
              </Link>
              <div className='dets'>
                <ul>
                  <li><span>    <i className="fa-regular fa-clock"></i> {data.clock} </span></li>
                  <li> <span> {data.heart} &nbsp;<i className="fa-regular fa-heart"></i> &nbsp; {data.comments} &nbsp; <i className="fa-regular fa-comment"></i>   </span></li>
                </ul>
              </div>
              </div>
              <div className='Forests'>
                <h2>{data.heading}</h2>
                <p>{data.pragraph}</p>
                <Link to={data.btnlink} className='bgtreact'>{data.btnname}</Link>
              </div>
            </div>
              ))} 
            
          </OwlCarousel> 
          </div> 
          
          </div> 
        </div>
      </div>
   


      {modals}


  

    </>
  )
}

export default LatestNews1Component