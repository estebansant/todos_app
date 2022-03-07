import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter(){

    let {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <h2 className='todo__counter'>You have completed {completedTodos} out of {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};