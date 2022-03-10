import React from 'react';
import './TodoItem.css';
import {BsCheck2Circle} from 'react-icons/bs';
import {BsTrash} from 'react-icons/bs';

function TodoItem(props){
    return(
        <li className='box'>
            <BsCheck2Circle className={`box__check ${props.completed && 'box__check--active'}`} 
                onClick={props.onComplete}/> 
            <div className={`box__todo ${props.completed && 'box__todo--active'}`}>
                <p className={`todo__text ${props.completed && 'todo__text--active'}`}>{props.text}</p>
                <BsTrash className="todo__delete"
                    onClick={props.onDelete}
                />
            </div>
            
        </li>
    );
}

export {TodoItem};