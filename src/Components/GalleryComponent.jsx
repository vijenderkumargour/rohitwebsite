import React, { useState } from 'react';
import Modal from 'react-modal';
import {images, images1, images2, images3 }  from './GalleryListCPT';
import { Link } from 'react-router-dom';


const GalleryComponent = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
 
  
  
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-fluid gallery">
      <div className='row'>
        <div className='col-lg-12 col-md-12'>
            <div className='text-center dt'>
                <h2>Our Gallery</h2> 
            </div>
        </div>
      </div>
 
      <div className="tab-class text-center"> 
        <ul className="nav nav-pills gallerynav">
          <li>
            <Link className="active" data-bs-toggle="pill" to="#GalleryTab-1" >  All </Link>
          </li>
          <li>
            <Link data-bs-toggle="pill" to="#GalleryTab-2">  World tour   </Link>
          </li>
          <li>
            <Link data-bs-toggle="pill" to="#GalleryTab-3">  environment   </Link>
          </li>
          <li>
            <Link data-bs-toggle="pill" to="#GalleryTab-4">  welfare   </Link>
          </li>
        </ul>
       

        <div className="tab-content">
          <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
            <div className="row g-2">
              {images.map((image, index) => (
                <div key={index} className="col-lg-3 col-md-3">
                  <div className="gallery-item h-100">
                    <img src={image}  className="img-fluid w-100 h-100 rounded" alt={`Gallery ${index + 1}`} 
                        onClick={() => openLightbox(index)} />  
                  </div>
                </div>
              ))}
            </div>
          </div>
         
          <div id="GalleryTab-2" className="tab-pane fade show p-0">
          <div className="row g-2">
              {images1.map((image, index) => (
                <div key={index} className="col-lg-3 col-md-3">
                  <div className="gallery-item h-100">
                    <img src={image}  className="img-fluid w-100 h-100 rounded" alt={`Gallery ${index + 1}`} 
                        onClick={() => openLightbox(index)} />  
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="GalleryTab-3" className="tab-pane fade show p-0">
          <div className="row g-2">
              {images2.map((image, index) => (
                <div key={index} className="col-lg-3 col-md-3">
                  <div className="gallery-item h-100">
                    <img src={image}  className="img-fluid w-100 h-100 rounded" alt={`Gallery ${index + 1}`} 
                        onClick={() => openLightbox(index)} />  
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="GalleryTab-4" className="tab-pane fade show p-0">
          <div className="row g-2">
              {images3.map((image, index) => (
                <div key={index} className="col-lg-3 col-md-3">
                  <div className="gallery-item h-100">
                    <img src={image}  className="img-fluid w-100 h-100 rounded" alt={`Gallery ${index + 1}`} 
                        onClick={() => openLightbox(index)} />  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
     
      <Modal  isOpen={isOpen}  onRequestClose={closeLightbox} contentLabel="Image Modal" >
        <img  src={images[photoIndex]} className="img-fluid" alt={`Gallery ${photoIndex + 1}`} />
        <button onClick={closeLightbox} className="btn btn-secondary mt-3">Close</button>
      </Modal>
    </div>
  );
};

export default GalleryComponent;
