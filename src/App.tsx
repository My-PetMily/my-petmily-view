import MainPage from './pages/Main';
import RegisterPage from '@pages/Register';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import './app.css';
import LoginPage from '@pages/Login';

const App = (): JSX.Element => {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
