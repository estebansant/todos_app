import React from 'react';
import {useTodos} from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { Date } from '../Date';
import { Title} from '../Title';
import { MotivationalMessage } from '../MotivationalMessage';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResult } from '../EmptySearchResult';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';


function App() {

  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    motivation,
    randomMessage,
    setRandomMessage,
    day, 
    month, 
    date,
    syncTodos,
  } = useTodos();

  /*returning the variables to AppUI so it can use them there to make the app work*/

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <Date 
          day={day}
          month={month}
          date={date}
        />
        <Title 
        />
        <MotivationalMessage
          motivation={motivation}
          randomMessage={randomMessage}
          setRandomMessage={setRandomMessage}
        />

        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={() => <EmptySearchResult searchText={searchValue}/>}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal = {setOpenModal}
        openModal={openModal}
        loading={loading}
      />

      <ChangeAlertWithStorageListener 
        synchronize={syncTodos}
      />
    </React.Fragment>
  );
}

export default App;
