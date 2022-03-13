import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal, loading}){

    const onClickButton = () => {
        setOpenModal(!openModal);
      }; 
    
    return(
        <button 
            className={`todo__button ${!!loading && "todo__button--loading"}`}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};