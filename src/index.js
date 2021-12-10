import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './NavBar.js';
import MenuCards from './MenuCards.js';
import Hero from './Hero.js'
import BeverageCards from './BeverageCards.js'


ReactDOM.render(
  <React.StrictMode>
    <div className='grid md:grid-cols-7'>
      <div className='md:col-span-1'>
        <Navbar />
      </div>

      <div className='bg-gray-100 md:col-span-6' id='home'>
        <Hero />
        <MenuCards />
        <BeverageCards/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
