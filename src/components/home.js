import React from 'react';

// CONTAINERS
import Navbar from '../containers/navbar';

// COMPONENTS
import Menu from './menu';
import About from './about';
import Hours from './hours';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <About />
      <Hours />
    </div>
  )
}

export default Home;
