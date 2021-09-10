import React, { useState } from 'react';
import axios from 'axios';

const ToDoList = (props) => {
  const [errorData, setErrorData] = useState('');
  const dataArray = props.data;
  const getUser = props.func;

  const removeTodo = (id) => {
    return function () {
      axios({
        method: 'delete',
        withCredentials: true,
        url: `http://localhost:4000/todo/delete/${id}`,
      })
        .then(() => getUser())
        .catch((e) => {
          setErrorData(e);
          console.log(errorData);
        });
    };
  };

  return (
    <div>
      <p>
        {dataArray.map((todo, i) => {
          return (
            <div onClick={removeTodo} key={i} class='tile'>
              <div class='tile-content'>
                <p class='tile-title'>
                  <h3>Task {todo.task}</h3>
                </p>
              </div>
              <div class='tile-action'>
                <button onClick={removeTodo(todo._id)} class='btn btn-primary'>
                  Delete ToDo
                </button>
                <p>{todo._id}</p>
              </div>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default ToDoList;
