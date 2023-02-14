import MainPage from './pages/Main';
import RegisterPage from '@pages/Register';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import './app.css';

const App = (): JSX.Element => {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
