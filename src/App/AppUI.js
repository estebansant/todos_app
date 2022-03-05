import React from 'react';
import {Date} from '../Date/index.js';
import {Title} from '../Title/index.js';
import {MotivationalMessage} from '../MotivationalMessage/index.js';
import {TodoCounter} from '../TodoCounter/index.js';
import {TodoSearch} from '../TodoSearch/index.js';
import {TodoHide} from '../TodoHide/index.js';
import {TodoList} from '../TodoList/index.js';
import {CreateTodoButton} from '../CreateTodoButton/index.js';
import {TodoItem} from '../TodoItem/index.js';

function AppUI({randomMotivation,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}) {

    return (
        <React.Fragment>
            <Date />

            <Title />

            <MotivationalMessage
                message={randomMotivation}
            />

            <TodoCounter
                total={totalTodos}
                completed={completedTodos}  
            />
            
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoHide />

            <TodoList>
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() =>completeTodo(todo.text)}
                    onDelete = {() =>deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};