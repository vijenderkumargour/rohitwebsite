import React, { useState } from 'react'; 
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

const AchievementsComponent = () => {

 const [Beavers, setBeavers] = useState(false);
 const [Funds, setFunds] = useState(false);
 const [Volunteer, setVolunteer] = useState(false);
 const [Help, setHelp] = useState(false);      

  return (
    <>
      <div className="achievement">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="text-center dt">
                <h2>ACHIEVEMENTS</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="counter firstbg">
                <i className="fa-regular fa-thumbs-up"></i>
                  <h3>Beavers Saved</h3>
                  <h4>
                <VisibilitySensor
                    onChange={isVisible => {
                        if (isVisible) setBeavers(true);
                    }}
                    >
                    <CountUp start={0} end={Beavers ? 3600 : 0} duration={7} separator="," />
                </VisibilitySensor> +
                </h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="counter">
                <i className="fa-regular fa-file-lines"></i>
                  <h3>Beavers Saved</h3>
                  <h4>
                <VisibilitySensor
                    onChange={isVisible => {
                        if (isVisible) setFunds(true);
                    }}
                    >
                    <CountUp start={0} end={Funds ? 503 : 0} duration={7} separator="," />
                </VisibilitySensor> +
                </h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="counter">
                <i className="fa-regular fa-user"></i>
                  <h3>Beavers Saved</h3>
                  <h4>
                <VisibilitySensor
                    onChange={isVisible => {
                        if (isVisible) setVolunteer(true);
                    }}
                    >
                    <CountUp start={0} end={Volunteer ? 713 : 0} duration={7} separator="," />
                </VisibilitySensor> +
                </h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="counter">
                <i className="fa-regular fa-heart"></i>
                  <h3>Beavers Saved</h3>
                  <h4>
                <VisibilitySensor
                    onChange={isVisible => {
                        if (isVisible) setHelp(true);
                    }}
                    >
                    <CountUp start={0} end={Help ? 887 : 0} duration={7} separator="," />
                </VisibilitySensor> +
                </h4>
                </div>
            </div>
            <Link to="/contact" className="bgtreact auto-center">Join With Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsComponent;
