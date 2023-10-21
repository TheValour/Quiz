import React from 'react';
import { NavLink } from "react-router-dom";

function QuestionView() {
  const title = "Product Title";
  const duration = "2 hours";
  const shop = "Example Shop";
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis sit amet lectus interdum elementum.";
  
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className='border-2 p-10 w-5/12'>
        <h2 className="product-title text-2xl font-bold text-gray-800">{title}</h2>
        <p className="product-duration text-gray-600 mt-2">Duration: {duration}</p>
        <p className="product-shop text-gray-600">Shop: {shop}</p>
        <p className="product-description text-gray-600 mt-2">{desc}</p> 
        <button className='bg-green-300 mt-5 p-2 rounded-lg mr-3'>Start Quiz</button> 
        <button className='bg-red-300 mt-5 p-2 rounded-lg'>
          <NavLink to="/">
            Back
          </NavLink>
        </button> 
      </div>
    </div>
  );
} 

export default QuestionView;
