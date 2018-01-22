import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        <span className="side-img left-side-img"><i></i><i></i><i></i></span>
					Contact Us
				<span className="side-img right-side-img"><i></i><i></i><i></i></span>
    	</h2>
      <p>
        Come Visit and See What Everyone's Talking About
      </p>

      <div className="contact-info container">
        <div className="contact-details">
          <div className="contact-text">
            <p className="contact-title"><em>Contact Details</em></p>
            <p>Thank you for visiting our website.</p>
            <p>&#127968; <span>12203 E .ILIFF Avenue. #D.Aurora,CO 80014</span></p>
            <p>&#9742; <span>303-755-8518</span></p>
          </div>

          <div className="contact-image">
            <img src={require('../static/images/bg-2.jpg')} alt="img-2"/>
          </div>
        </div>
        <div className="contact-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8331272154296!2d-104.84812238462644!3d39.67596817945811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c87ffe9454e4b%3A0x1b4112d58c6607ea!2sChina+Jade!5e0!3m2!1sen!2sus!4v1516646725512"
            width="100%" height="450" frameBorder="0" allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
