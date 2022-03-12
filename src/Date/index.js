import React from 'react';
import './Date.css';

function Date ({day, month, date}){

    return(
        <p className='date'>{day}, {month} {date}</p>
    );
}

export {Date};