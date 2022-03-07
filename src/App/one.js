import React from 'react';
import {TodoContext} from '../TodoContext';
import{ Date } from '../Date';
import { Title} from '../Title';
import { MotivationalMessage } from '../MotivationalMessage';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHide } from '../TodoHide';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {

  let {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo} = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <Date />
      <Title />
      <MotivationalMessage />

      <TodoCounter />
      <TodoSearch />

      <TodoHide />

      
      <TodoList>
        {error && <p>Panic! There was an error...</p>}
        {loading && <p>We are loading, dont panic...</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first Todo!</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>


      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };