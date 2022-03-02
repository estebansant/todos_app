import React from 'react';
import {TodoCounter} from './TodoCounter.js';
import {TodoSearch} from './TodoSearch.js';
import {TodoList} from './TodoList.js';
import {CreateTodoButton} from './CreateTodoButton.js';
import {TodoItem} from './TodoItem.js';

// import './App.css';

const todos =[
  {text: "go to classes", completed: false},
  {text: "take a shower", completed: false},
  {text: "have dinner", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
