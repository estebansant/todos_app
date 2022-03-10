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
        <form onSubmit={onSubmit} className="popup">
            <label className="popup__message">Write your new Todo</label>
            <textarea
                value={newTodoValue}
                onChange={onWrite}
                placeholder="Write it here"
                className="popup__input"
            />
            <div className="popup__buttons">
                <button 
                    type="button"
                    onClick={onCancel}
                    className="popup__buttons--cancel"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="popup__buttons--submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}