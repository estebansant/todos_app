import React from 'react';
import './Date.css';

function Date ({day, month, date, loading}){
    return(
        <p className={`date ${!!loading && "date__loading"}`}>{day}, {month} {date}</p>
    );
}

export {Date};