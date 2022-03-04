import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    let onClickButton = () =>(
        alert("open the popup here")
    )

    return(
        <button 
            className='todo__button'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};