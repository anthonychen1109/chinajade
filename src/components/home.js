import React from 'react';

// CONTAINERS
import Navbar from '../containers/navbar';

// COMPONENTS
import Carousel from './carousel';
import Menu from './menu';
import About from './about';
import Hours from './hours';
import Contact from './contact';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Navbar />
      <Menu />
      <About />
      <Hours />
      <Contact />
    </div>
  )
}

export default Home;
