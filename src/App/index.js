import React from 'react';
import {AppUI} from './AppUI';


let defaultTodos =[
  {text: "go to classes", completed: false},
  {text: "take a shower", completed: true},
  {text: "have dinner", completed: false},
  {text: "relax", completed: false},
  {text: "Go to sleep", completed: false},
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

  let [todos, setTodos] = React.useState(defaultTodos);
  let [searchValue, setSearchValue] = React.useState('');

  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length >= 1){

    searchedTodos = todos.filter(todo =>{
      let todoText = todo.text.toLowerCase();
      let searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });

  } else{
    searchedTodos = todos;
  };

  let completeTodo = (text) =>{
    let todoIndex = todos.findIndex(todo => todo.text === text);

    let newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  let deleteTodo = (text) =>{
    let todoIndex = todos.findIndex(todo => todo.text === text);

    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };

  return (
    <AppUI 
      randomMotivation={randomMotivation}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
