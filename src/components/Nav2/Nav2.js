import React from 'react';
import './Nav2.css';

const Nav2 =({handleClick1,N2style1,N2style2}) => {
    return(
        <div className="mt0 nav2">
        <p onClick = {() => handleClick1('total')} className={N2style1}>Total</p>
        <p onClick = {() => handleClick1('recent')} className={N2style2}>Recent</p>
        </div> 
    )
}

export default Nav2;