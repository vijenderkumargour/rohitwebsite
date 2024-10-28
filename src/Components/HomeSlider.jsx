import React from 'react'
import { Link } from 'react-router-dom'

const HomeSlider = () => {
  return (
    <>

<div className='homeslider'>
      <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className='slider'>
                <img src="img/carousel-1.jpg" className="d-block w-100" alt="carousel-1" />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h3>WE'LL SAVE OUR PLANET</h3>
                    <h5>Protect Environment</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                     <Link to='/contact' className='bgtreact'>Join With Us</Link>
                </div>
                </div>
                <div className="carousel-item">
                <div className='slider'>
                  <img src="img/carousel-2.jpg" className="d-block w-100" alt="carouse2" />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h3>WE'LL SAVE OUR PLANET</h3>
                    <h5>Protect Environment</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                     <Link to='/contact' className='bgtreact'>Join With Us</Link>
                </div>
                </div>
                <div className="carousel-item">
                <div className='slider'>
                  <img src="img/carousel-3.jpg" className="d-block w-100" alt="carousel3" />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h3>WE'LL SAVE OUR PLANET</h3>
                    <h5>Protect Environment</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                     <Link to='/contact' className='bgtreact'>Join With Us</Link>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
      </div>
    </>
  )
}

export default HomeSlider