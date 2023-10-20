import React from 'react';
import Navbar from './component/navbar/Navbar';
import './App.css';
import Hero from './component/heroSection/Hero';
import Quizes from './component/quizSection/Quizes';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Quizes/>
      <Footer/>
    </div>
  );
}

export default App;
