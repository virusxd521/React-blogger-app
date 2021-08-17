import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro-section';
import Phone from './Phone-section';
import Laptop from './LaptopSection';

ReactDOM.render(
    <div>
      <Header />
      <Intro />
      <Phone />
      <Laptop />
      <Footer />
    </div>  
      , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

