import React from 'react';

// CONTAINERS
import Navbar from '../containers/navbar';

// COMPONENTS
import Menu from './menu';
import About from './about';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <About />
    </div>
  )
}

export default Home;
