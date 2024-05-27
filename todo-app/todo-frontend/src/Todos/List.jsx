import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo._id}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete}
          todo={todo} />
      ).reduce((acc, cur, i) => [...acc, <hr key={"hr" + i} />, cur], [])}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoList
