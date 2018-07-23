import React from 'react';
import { connect } from 'react-redux';
import { todoGetAllAsync } from '../redux/actions/todoGetAllAction'; 

class TodoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(todoGetAllAsync());
  }

  render () {
    return (
      <p>This is the todo list</p>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps)(TodoList);