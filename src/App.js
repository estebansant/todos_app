import React from 'react';
// import './App.css';

const todos =[
  {text: "go to classes", completed: false},
  {text: "take a shower", completed: false},
  {text: "have dinner", completed: false},
]

function App() {
  return (
    <React.Fragment>
      {/*<TodoCounter />*/}
      <h2>You have completed 2 out of 3 TODOs</h2>

      {/*<Todosearch />*/}
      <input placeholder="search" />

      {/*<TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
        </TodoList>*/}

      {/*<CreateTodoButton />*/}
      <button>+</button>
      </React.Fragment>
  );
}

export default App;
