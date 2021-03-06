import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers ({
  todo: todoReducer
});

const newStore = createStore(rootReducer, 
                             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default newStore;
