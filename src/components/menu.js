import React from 'react';

const Menu = () => {
  return (
    <div id="menu" className="menu">
      <h2>
        <span className="side-img left-side-img"><i></i><i></i><i></i></span>
					Menu
				<span className="side-img right-side-img"><i></i><i></i><i></i></span>
    	</h2>
      <p>
        Food Made to Please
      </p>
      <div className="menu-portion container">
        <div className="menu-left container">
          <img src={require('../static/images/1.jpg')} alt="food-pic" />
        </div>
        <div className="menu-right container">
          <div className="menu-btn">
            <button className="btn btn-secondary">
              See and Order from our Menu
            </button>
          </div>
          <div className="menu-text">
            <p>
            <strong>Allergy Advisory: </strong> Before placing your order, please inform your server if a person in your party has a food allergy.
            </p>
            <p>
              All our dishes are cooked to order. If for any reason you cannot eat certain ingredients such as cornstarch, oil, sugar, or hot and spicy sauce, please let us know when ordering.
            </p>
            <p>
              All recipes requiring cooking oil are prepared with 100% vegetable oil.
            </p>
            <p>
              Items are Hot and Spicy. Ask for mild, medium or very hot.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
