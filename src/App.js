// src/App.js

import React from 'react';
import Snowfall from 'react-snowfall';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="text-gray-500 bg-purple-500 body-font">
      <Navbar />
      <About />
      <Snowfall color="pink" speed="100" snowflakeCount={8} />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}