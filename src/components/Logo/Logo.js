import React from 'react';
import icon from './icon.png';
import './Logo.css';

const Logo = () => {
  return ( 
        <div className="mar">
          <img  className="icon br2 shadow-2" alt='icon' src={icon}/>
          <p className="mt0 fon">Covid-19 <br/>Tracker </p>
        </div>
    
   
  );
}

export default Logo;