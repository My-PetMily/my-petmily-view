import axios from 'axios';
import React from 'react';

const MainPage = () => {
  const api = () => {
    axios.get('/email?email=ppwm111@naver.com', {
      withCredentials: true,
    });
  };

  const api2 = () => {
    axios.get('http://127.0.0.1:8081/email?email=ppwm111@naver.com', {
      withCredentials: true,
    });
  };

  const api3 = () => {
    axios.get('http://sujeong0.cafe24.com:8081/email?email=ppwm111@naver.com', {
      withCredentials: true,
    });
  };

  return (
    <div>
      <button onClick={api}>package.json proxy API버튼</button>
      <button onClick={api2}>no Proxy 127.0.0.1 API버튼</button>
      <button onClick={api3}>domain API버튼</button>
    </div>
  );
};

export default MainPage;
