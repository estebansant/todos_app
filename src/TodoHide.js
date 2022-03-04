import React from 'react';
import './TodoHide.css';

function TodoHide (){
    return(
        <div className='hide__container'>
            <p className='hide__container--text'>Completed tasks</p>
            <span className='hide__container--icon'>Icon</span>
        </div>
        

    );
}

export {TodoHide};