import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RemoveTodo from './RemoveTodo';

const ToDoList = () => {
  const [errorData, setErrorData] = useState('');
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:4000/user',
    })
      .then((data) => {
        setToDos(data.data.todos);
      })
      .catch((e) => setErrorData(e));
  });

  return (
    <div>
      <p>
        {toDos.map((todo, i) => {
          return (
            <div key={i} class='tile'>
              <div class='tile-content'>
                <p class='tile-title'>
                  <h3>Task {todo.task}</h3>
                </p>
              </div>
              <div class='tile-action'>
                <RemoveTodo id={todo._id} />
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
