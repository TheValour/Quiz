import React from 'react';

function Quiz({title, desc}) {
  return (
      <div className="max-w-sm bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded 
        focus:outline-none focus:shadow-outline">Start the Quize</button>
      </div>
  );
}

export default Quiz;
