import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

<><meta name="description" content="The most delicious restaurant in town" />
<meta name="og:title" content="Little Lemon" />
<meta name="og:description" content="The website for the fictional Little Lemon restaurant"/>
<meta name="og:image" content="https://greyhatguy007.github.io/little-lemon-coursera/data/little-lemon-logos/Asset-16@4x.png"/></>

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
