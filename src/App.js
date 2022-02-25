import React from 'react';
import './App.css';
import Header from './components/Header';
import ImgSlider from './components/ImgSlider';
import Movies from './components/Movies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <ImgSlider />
            <Movies />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
