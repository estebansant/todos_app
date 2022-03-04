import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    let onComplete = () =>(
        alert('you have completed the task: ' + props.text)
    );
    let onDelete = () =>(
        alert('you have erased the task: ' + props.text)
    );
    return(
        <li className='box'>
            <span className={`box__check ${props.completed && 'box__check--active'}`} 
                onClick={onComplete}
            >
                check
            </span>
            <div className={`box__todo ${props.completed && 'box__todo--active'}`}>
                <p className={`todo__text ${props.completed && 'todo__text--active'}`}>{props.text}</p>
                <span className="todo__delete"
                    onClick={onDelete}
                >
                    X
                </span>
            </div>
            
        </li>
    );
}

export {TodoItem};