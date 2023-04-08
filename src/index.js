import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <ConfigProvider
        theme={{
          // algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#0450F2',
          },

          // components: {
          //   Table: {
          //     colorBgContainer: '#70b6d2',

          //   },
          // },
        }}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
