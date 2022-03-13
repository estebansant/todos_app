import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {

  /*Setting up the current date*/

  const calendar = new Date();
  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const day = weekDay[calendar.getDay()];
  const month = monthYear[calendar.getMonth()];
  const date = calendar.getDate();

   /*Creating a random message to display on the app each time it loads*/

   const motivation =[
    "Keep the good work!",
    "Just do your best",
    "Get your job done",
    "Stop resting and start making",
    "Dreams don't work, unless you do",
    "The obstacle is the way through",
    "Find a moment for everything",
];

  const [randomMessage, setRandomMessage] = React.useState('');

  /*Using the custom Hook*/

  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  /*Searching todos in the search bar*/

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  /*Add, complete and delete a Todo*/

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return {
    loading,
    error,
    day,
    month,
    date,
    motivation,
    randomMessage, 
    setRandomMessage,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  };
}

export { useTodos };