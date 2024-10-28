import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialCPTList from './TestimonialCPTList';  

const TestimonialComponent = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    navText: ["<img src='img/arrow-left-2.png' />", "<img src='img/arrow-right-2.png' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <section className="testominail-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center mb-5 mt-3">
            <div className="testimon">
              <h3>What Client Says?</h3>
              <h1>Testimonials</h1>
            </div>
          </div>
          <div className="col-md-12">
            <OwlCarousel id="testimonial7-slider" {...options}>
              {TestimonialCPTList.map((data, index) => (
                <div className="testimonial7" key={index}>
                  <div className="pic">
                    <img src={data.imgsrc} alt={data.alt} />
                  </div>
                  <div className="testimonial7-profile">
                    <h3 className="title">{data.name}</h3>
                    <span className="post">{data.position}</span>

                    <ul className="star-rating">
                      <li>
                        <i className="fa-solid fa-star"></i>
                        {Array(Math.floor(data.rating)).fill(1).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                        {data.rating % 1 >= 0.5 && <i className="fa-solid fa-star-half-stroke"></i>}
                      </li>
                    </ul>

                  </div>
                  <p className="description">
                    {data.comments}
                  </p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
