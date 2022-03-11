import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="loadingTodo__container">
      <span className="loadingTodo__container--check"></span>
      <p className="loadingTodo__container--text">Loading TODOs...</p>
      <span className="loadingTodo__container--delete"></span>
    </div>
  );
}

export { TodosLoading };