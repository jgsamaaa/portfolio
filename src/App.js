import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="w-full  bg-gray-700 mx-auto">
        <div className="bg-[#090a0b] bg-no-repeat bg-opacity-50">
          <Navbar />
          <Header />
        </div>
        <div className="bg-slate-900 ">
          <Aboutme />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
