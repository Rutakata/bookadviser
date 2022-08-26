import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TitleContainer from './Components/Common/TitlePage/TitleContainer';
import Header from './Components/Header/Header';
import MainPageContainer from './Components/MainPage/MainPageContainer';
import RandomContainer from './Components/RandomPage/RandomContainer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/manga-adviser/main" replace /> }/>
        <Route path="/manga-adviser/main" element={<MainPageContainer />} />
        <Route path="/manga-adviser/random" element={<RandomContainer />} />
        <Route path="/manga-adviser/title/:titleId" element={<TitleContainer />} />
      </Routes>
    </div>
  );
}

export default App;
