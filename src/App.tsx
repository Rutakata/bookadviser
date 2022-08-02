import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MainContainer from './Components/Main/MainContainer';
import RandomContainer from './Components/Random/RandomContainer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<MainContainer />} />
        <Route path="/random" element={<RandomContainer />} />
      </Routes>
    </div>
  );
}

export default App;
