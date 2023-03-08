import axios from 'axios';
import React from 'react';

const MainPage = () => {
  const api = () => {
    axios.get('/email?email=ppwm111@naver.com', {
      withCredentials: true,
    });
  };
  return (
    <div>
      <button onClick={api}>API버튼</button>
    </div>
  );
};

export default MainPage;
