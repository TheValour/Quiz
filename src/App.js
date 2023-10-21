import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Home from './component/Home'
import QuestionView from './component/question/QuestionView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz' element={<QuestionView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
