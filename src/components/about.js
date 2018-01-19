import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>
        <span className="side-img left-side-img"><i></i><i></i><i></i></span>
          Our Restaurant
        <span className="side-img right-side-img"><i></i><i></i><i></i></span>
      </h2>
      <p>
        Everything to make your day go right.
      </p>
      <div className="about-items">
        <div className="about-1">
          <img src={require('../static/images/image1.jpg')} alt="pic-1"/>
          <span>Amazing Food</span>
        </div>
        <div>
          <img src={require('../static/images/image2.jpg')} alt="pic-2"/>
        </div>
        <div>
          <img src={require('../static/images/image3.jpg')} alt="pic-3"/>
        </div>
      </div>
    </div>
  )
}

export default About;
