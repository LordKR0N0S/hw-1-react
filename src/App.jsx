import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className='App'>
      <div className='containerApp'>
        <Header />
        <Courses />
      </div>
    </div>
  );
}

export default App;
