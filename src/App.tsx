import MainPage from './pages/Main';
import RegisterPage from '@pages/Register';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
