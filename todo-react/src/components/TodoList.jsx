import TodoItem from "./TodoItem";

const TodoList = ({tasks = [], onDeleteTaskButtonClick, onCompletedBoxClick}) => {
    const hasTasks = true;

    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>

        );
    }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          onDeleteTaskButtonClick = {onDeleteTaskButtonClick}
          onCompletedBoxClick = {onCompletedBoxClick}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          
        />
      ))}
    </ul>
  );
};

export default TodoList;