import React from 'react';
import './App.css';
import Header from './components/Header';
import ImgSlider from './components/ImgSlider';
import Movies from './components/Movies';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <ImgSlider />
      <Movies />
    </div>
  );
};

export default App;
