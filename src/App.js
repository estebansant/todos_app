import React from 'react';
import {Date} from './Date.js';
import {Title} from './Title.js';
import {MotivationalMessage} from './MotivationalMessage.js';
import {TodoCounter} from './TodoCounter.js';
import {TodoSearch} from './TodoSearch.js';
import {TodoHide} from './TodoHide.js';
import {TodoList} from './TodoList.js';
import {CreateTodoButton} from './CreateTodoButton.js';
import {TodoItem} from './TodoItem.js';

// import './App.css';

let todos =[
  {text: "go to classes", completed: false},
  {text: "take a shower", completed: true},
  {text: "have dinner", completed: false},
]

let motivation =[
  "Keep the good work!",
  "Just do your best",
  "Get your job done",
  "Stop resting and start making",
  "Dreams don't work, unless you do",
  "The obstacle is the way through",
  "Find a moment for everything",
]

let randomMotivation = motivation[Math.floor(Math.random()*motivation.length)]

function App() {
  return (
    <React.Fragment>
      <Date />

      <Title />

      <MotivationalMessage
        message={randomMotivation}
      />

      <TodoCounter />
      
      <TodoSearch />

      <TodoHide />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
