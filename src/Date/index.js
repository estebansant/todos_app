import React from 'react';
import './Date.css';
import {TodoContext} from '../TodoContext';

function Date (){

    const {day, month, date} = React.useContext(TodoContext);

    return(
        <p className='date'>{day}, {month} {date}</p>
    );
}

export {Date};