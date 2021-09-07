import React from 'react';
import NewToDo from '../components/NewToDo';
import ToDoList from '../components/ToDoList';

const ToDoPage = () => {
  return (
    <React.Fragment>
      <NewToDo />
      <ToDoList />
    </React.Fragment>
  );
};

export default ToDoPage;
