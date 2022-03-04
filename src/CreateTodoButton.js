import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    let onClickButton = (message) =>(
        alert(message)
    )

    return(
        <button 
            className='todo__button'
            onClick={() => onClickButton('open the popup')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};