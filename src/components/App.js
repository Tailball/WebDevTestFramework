import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <p>Testing react and redux components</p>

          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;