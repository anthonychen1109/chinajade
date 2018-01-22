import React from 'react';

const Hours = () => {
  return (
    <div className="restaurant-hours">
      <h2>
        <span className="side-img left-side-img"><i></i><i></i><i></i></span>
					Restaurant Hours
				<span className="side-img right-side-img"><i></i><i></i><i></i></span>
    	</h2>

      <div className="hours container">
        <p className="day-of-week"><strong>Tuesday:</strong></p>
        <p>Closed</p>
        <hr />
        <br />
        <p className="day-of-week"><strong>Monday - Sunday:</strong></p>
        <hr />
        <p>11:00AM - 9:30PM</p>
      </div>
    </div>
  )
}

export default Hours;
