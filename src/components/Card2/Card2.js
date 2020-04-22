import React from 'react';
import './Card2.css';

const Card2 =({active,recovered}) =>{
    return(
        <div className="con1">
        <div className="fl w-50 card3">
        <p className="tit1 fw5">Recovered</p>
        <p className="fw7 info1">{recovered.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="fl w-50 card4">
        <p className="tit1 fw5">Total Active</p>
        <p className="fw7 info1">{active.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
    </div>
    )
}


export default Card2;