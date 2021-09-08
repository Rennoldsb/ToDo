import React, { useState } from 'react';
import axios from 'axios';

const NewToDo = (props) => {
  const [todo, setTodo] = useState('');
  const getUser = props.func;

  const newToDo = () => {
    axios({
      method: 'post',
      data: {
        task: todo,
      },
      withCredentials: true,
      url: 'http://localhost:4000/todo',
    })
      .then(() => setTodo(''))
      .then(() => getUser())
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div>
      <div>
        <label class='form-label' for='newTodo'>
          New ToDo
        </label>
        <input
          value={todo}
          className='form-input'
          onChange={(e) => setTodo(e.target.value)}
          placeholder='New Todo'
          id='newTodo'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              newToDo();
            }
          }}
        />
        <button onClick={newToDo}>Submit New Todo!</button>
      </div>
    </div>
  );
};

export default NewToDo;
