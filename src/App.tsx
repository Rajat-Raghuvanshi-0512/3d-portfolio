import React, { useEffect, useRef, useState } from 'react';
import {
  Navbar,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Hero,
} from './components';
import MatrixRain from './components/MatrixBg';
const App = () => {
  return (
    <div className="relative z-0 bg-primary overflow-y-hidden">
      <MatrixRain />
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
};

export default App;
App;
