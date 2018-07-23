import { TODO_GET_ALL } from '../actions/todoGetAllAction';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_GET_ALL: 
      return [...state, ...action.payload];
    default: 
      return state;
  }
};

export default todoReducer;