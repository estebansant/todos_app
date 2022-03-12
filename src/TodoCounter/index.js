import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){

    return (
        <h2 className='todo__counter'>You have completed {completedTodos} out of {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};