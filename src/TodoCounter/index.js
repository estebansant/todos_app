import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}){

    return (
        <h2 className={`todo__counter ${!!loading && "todo__counter--loading"}`}>You have completed {completedTodos} out of {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};