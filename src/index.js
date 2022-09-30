import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// link를 사용해서 url은 변경되지만 컴포넌트가 업데이트 되지 않고 새로고침을 해야지만 변경 되는 경우
// index.js 에서 React.StrictMode 를 지우면 정상적으로 작동한다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
