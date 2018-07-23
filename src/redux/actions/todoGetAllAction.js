import axios from 'axios';

export const TODO_GET_ALL = 'todo:getall';

export const todoGetAllAsync = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then (result => {
        dispatch(todoGetAll(result.data));
      });
  }
};

const todoGetAll = (data) => {
  return {
    type: TODO_GET_ALL,
    payload: data
  }
};