import React from 'react'

import Navbar from './navbar/Navbar';
import Hero from './heroSection/Hero';
import Quizes from './quizSection/Quizes';
import Footer from './footer/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Quizes/>
      <Footer/>
    </div>
  );
}
export default Home;


