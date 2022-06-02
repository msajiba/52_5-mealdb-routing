import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/meals' element={<Meals />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='*' element={<NotFound />}> </Route>

      </Routes>

    </div>
  );
}

export default App;

