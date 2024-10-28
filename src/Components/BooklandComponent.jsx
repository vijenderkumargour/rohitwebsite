import React from 'react'
import { Link } from 'react-router-dom'


const BooklandComponent = () => {
  return (
    <>

    <div className='bookland'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-7 col-md-7'>
                <div className='left-strore'>
                    <span>RECOMENDED FOR YOU</span>
                    <h1>Bookland Is Best Choice For Learners</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Link to="/contact" className="bgtreact">Join With Us</Link>
                </div>
            </div>
            <div className='col-lg-5 col-md-5'>
                <div className='pulsing'> 
                    <div className="pulsating-circle" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-play"></i></div>
                </div>
            </div>
        </div>
    </div>   
 </div>


 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header1"> 
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
      <iframe width="100%" height="400"  src="https://www.youtube.com/embed/pLJCn5izlgU?si=Rr0WtxPkqFaeK36L" title="YouTube video player"></iframe>
      </div> 
    </div>
  </div>
</div>
      
    </>
  )
}

export default BooklandComponent
