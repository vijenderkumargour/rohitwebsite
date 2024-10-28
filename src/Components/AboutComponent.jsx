import React from 'react';
import { Link } from 'react-router-dom';

const AboutComponent = () => {
  return (
    <div className='aboutsec'>
      <div className='container'>
        <div className='row'> 
          <div className='col-lg-5 col-md-5'>
            <div className='abot1'>
              <ul> 
                <li>
                  <Link to='/service'><img src='img/about-img-1.jpg' alt='abt-1' /></Link>
                  <div className='about-text'>
                    <h3>Michel Brown</h3>
                    <p>Communicator</p>
                  </div>
                </li>
                <li>
                  <Link to='/service'><img src='img/about-img-2.jpg' alt='abt-1' /></Link>
                  <div className='about-text'>
                    <h3>Michel Brown</h3>
                    <p>Communicator</p>
                  </div>
                </li>
                <li>
                  <Link to='/service'><img src='img/about-img-3.jpg' alt='abt-1' /></Link>
                  <div className='about-text'>
                    <h3>Michel Brown</h3>
                    <p>Communicator</p>
                  </div>
                </li>
                <li>
                  <Link to='/service'><img src='img/about-img-4.jpg' alt='abt-1' /></Link>
                  <div className='about-text'>
                    <h3>Michel Brown</h3>
                    <p>Communicator</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
         
          <div className='col-lg-7 col-md-7'>
            <div className='abt2'>
              <h4>BECOME A VOLUNTEER?</h4>
              <h2>Join your hand with us for a better life and beautiful future.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptates nesciunt? Ad, quidem molestiae
                sequi debitis earum repudiandae quam ex magnam omnis quae labore neque porro quo perferendis commodi ducimus non
                minima accusantium libero numquam eius soluta vero.
              </p>
              <ul> 
                <li><i className="fa-solid fa-check"></i> We are friendly to each other.</li>
                <li><i className="fa-solid fa-check"></i> If you join with us, we will give you free training.</li>
                <li><i className="fa-solid fa-check"></i> It's an opportunity to help poor environments.</li>
                <li><i className="fa-solid fa-check"></i> No goal requirements.</li>
                <li><i className="fa-solid fa-check"></i> Joining is totally free. We don't need any money from you.</li>
              </ul>
              <Link to='/contact' className='bgtreact' style={{margin: '11px 0'}}>Join With Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
