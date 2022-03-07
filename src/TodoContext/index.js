import React from 'react';
import {useLocalStorage} from './useLocalStorage';

let TodoContext = React.createContext();

function TodoProvider(props){

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

    /*Using the custom hook, useLocalStorage*/

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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            randomMotivation,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};