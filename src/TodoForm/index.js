import React from 'react';
import './TodoForm.css';
import {TodoContext} from '../TodoContext';
 
function TodoForm(props) {

    let [newTodoValue, setNewTodoValue] = React.useState('');

    let {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    let onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }

    let onCancel = () => {
        setOpenModal(false);
    }

    let onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Write your new Todo</label>
            <textarea
                value={newTodoValue}
                onChange={onWrite}
                placeholder="Get ready for the meal"
            />
            <div>
                <button 
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}