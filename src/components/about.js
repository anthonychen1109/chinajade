import React from 'react';

const About = () => {

  return (
    <div id="about" className="about">
      <h2>
        <span className="side-img left-side-img"><i></i><i></i><i></i></span>
          Our Restaurant
        <span className="side-img right-side-img"><i></i><i></i><i></i></span>
      </h2>
      <p>
        Everything to make your day go right.
      </p>
      <div className="about-items container">
        <div className="about-1">
          <div>
            <span><p>Amazing Food</p></span>
            <img src={require('../static/images/2.jpg')} alt="pic-1"/>
          </div>
          <div className="about-desc">
            <p><strong>Something for Everyone</strong></p>
            <p>Whether you're with friends, family or by yourself, we have something for everyone at prices you'll love.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;
