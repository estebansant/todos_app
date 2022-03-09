import React from 'react';
import {AppUI} from './AppUI.js';
import {TodoProvider} from '../TodoContext';


function App() {

  /*returning the variables to AppUI so it can use them there to make the app work*/

  return (
    <TodoProvider>
      <AppUI 
      
      />
    </TodoProvider>
  );
}

export default App;
