import React from 'react';
import {AppUI} from './one.js';

/*Creating a random message to display on the app each time it loads*/

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

/*Creating a custom Hook to host the Local Storage state*/

function useLocalStorage (itemName, initialValue) {

  let [error, setError] = React.useState(false);
  let [loading, setLoading] = React.useState(true);
  let [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        let localStorageItem = localStorage.getItem('itemName');
        let parsedItem; 
        
        if(!localStorageItem){
          localStorage.setItem('itemName', JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem (parsedItem);
        setLoading (false);
      } catch(error){
        setError(error);
      }
      }, 1000);
  }, [])


  let saveItem = (newItem) =>{
    try{
      let stringedItem = JSON.stringify(newItem);
      localStorage.setItem('itemName', stringedItem);
      setItem(newItem);
    } catch(error){
      setError(error);
    }
    
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

/*Setting up the App component to work propperly using states, custom hooks and events*/

function App() {

  let{
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
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


  /*Events to complete or delete a todo*/

  let completeTodo = (text) =>{
    let todoIndex = todos.findIndex(todo => todo.text === text);

    let newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  let deleteTodo = (text) =>{
    let todoIndex = todos.findIndex(todo => todo.text === text);

    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  /*returning the variables to AppUI so it can use them there to make the app work*/

  return (
    <AppUI 
      loading = {loading}
      error = {error}
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
