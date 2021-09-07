import React, { useEffect, useState } from 'react';
import NewToDo from '../components/NewToDo';
import ToDoList from '../components/ToDoList';
import axios from 'axios';

const ToDoPage = () => {
  const [data, setData] = useState([]);

  const GetUser = async () => {
    const response = await axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:4000/user',
    });
    setData(response.data.todos);
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <React.Fragment>
      <NewToDo func={GetUser} />
      <ToDoList data={data} func={GetUser} />
    </React.Fragment>
  );
};

export default ToDoPage;
