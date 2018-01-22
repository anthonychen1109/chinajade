import React from 'react';

// CONTAINERS
import Navbar from '../containers/navbar';

// COMPONENTS
import Menu from './menu';
import About from './about';
import Hours from './hours';
import Contact from './contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <About />
      <Hours />
      <Contact />
    </div>
  )
}

export default Home;
