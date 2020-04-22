import React from 'react';
import './Card1.css';

const Card1 = ({confirmed,death}) => {
    return(
        <div className="con">
            <div className="fl w-50 card1">
            <p className="tit fw5">Affected</p>
            <p className="fw7 info">{confirmed.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className="fl w-50 card2">
            <p className="tit fw5">Death</p>
            <p className="fw7 info">{death.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
        </div>
    )
}

export default Card1;