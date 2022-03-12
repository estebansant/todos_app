import React from 'react';
import './TodoForm.css';
 
function TodoForm({ addTodo, setOpenModal, }) {

    let [newTodoValue, setNewTodoValue] = React.useState('');


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