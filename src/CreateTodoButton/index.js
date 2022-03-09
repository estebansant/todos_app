import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from '../TodoContext';

function CreateTodoButton(){

    let { openModal, setOpenModal } = React.useContext(TodoContext);

    let onClickButton = () => {
        setOpenModal(!openModal);
      }; 
    
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