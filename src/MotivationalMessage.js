import React from 'react';
import './MotivationalMessage.css';

function MotivationalMessage (props){
    return(
        <h2 className='motivation'>{props.message}</h2>
    );
}

export {MotivationalMessage};