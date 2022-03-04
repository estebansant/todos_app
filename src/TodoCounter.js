import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}){

    return (
        <h2 className='todo__counter'>You have completed {completed} out of {total} TODOs</h2>
    );
}

export {TodoCounter};