import TodoItem from "./TodoItem";

const TodoList = ({tasks = [], onDeleteTaskButtonClick, onCompletedBoxClick ,filteredTasks}) => {
    const hasTasks = tasks.length > 0;

    const isEmptyFilteredTasks = filteredTasks?.length ===0;
    
    
    
    if (!hasTasks) {
        return (
            <div className="todo__empty-message">There are no tasks yet</div>

        );
    }


    if (hasTasks && isEmptyFilteredTasks) {
      return(    
      <div className="todo__empty-message">Tasks not found</div>
      );
    }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
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