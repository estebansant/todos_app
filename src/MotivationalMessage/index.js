import React from 'react';
import './MotivationalMessage.css';
import {TodoContext} from '../TodoContext';

function MotivationalMessage (){

    let {randomMotivation} = React.useContext(TodoContext);

    return(
        <h2 className='motivation'>{randomMotivation}</h2>
    );
}

export {MotivationalMessage};