import React from 'react';
import './Nav.css';
import india from './india.svg';
import globe from './globe.svg';

const Nav = ({handleClick,Nstyle1,Nstyle2}) => {
  return ( 
        <div className="nav shadow-4">
          <button onClick = {() => handleClick('india')} className={Nstyle1}><img src = {india} alt="india-icon" className="im"/>
          India</button>
          <button onClick = {()=> handleClick('world')} className={Nstyle2}><img src= {globe} alt="world-icon" className="im"/>
          World</button>
        </div>
    
   
  );
}

export default Nav;