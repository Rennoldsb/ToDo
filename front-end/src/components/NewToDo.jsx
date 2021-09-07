import React, { useState } from 'react';
import axios from 'axios';

const NewToDo = () => {
  const [todo, setTodo] = useState('');
  const [errorData, setErrorData] = useState('');

  const newToDo = () => {
    axios({
      method: 'post',
      data: {
        task: todo,
      },
      withCredentials: true,
      url: 'http://localhost:4000/todo',
    }).catch((e) => setErrorData(e.response.data));
  };

  return (
    <div>
      <div>
        <label class='form-label' for='newTodo'>
          New ToDo
        </label>
        <input
          className='form-input'
          onChange={(e) => setTodo(e.target.value)}
          placeholder='New Todo'
          id='newTodo'
        />
        <button onClick={newToDo}>Submit New Todo!</button>
      </div>
    </div>
  );
};

export default NewToDo;
