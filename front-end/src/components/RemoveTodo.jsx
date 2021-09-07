import React from 'react';
import axios from 'axios';

function RemoveTodo(props) {
  const removeTodo = (id) => {
    id = props.id;
    axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:4000/todo/delete/${id}`,
    });
  };
  return (
    <button onClick={removeTodo} class='btn btn-primary'>
      Delete ToDo
    </button>
  );
}

export default RemoveTodo;
