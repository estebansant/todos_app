import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className='box'>
            <span className={`box__check ${props.completed && 'box__check--active'}`}>check</span>
            <div className={`box__todo ${props.completed && 'box__todo--active'}`}>
                <p className={`todo__text ${props.completed && 'todo__text--active'}`}>{props.text}</p>
                <span className="todo__delete">X</span>
            </div>
            
        </li>
    );
}

export {TodoItem};