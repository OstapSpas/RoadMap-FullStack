import Field from "./Field";
import Button from "./Button";


const AddTaskForm = ({onSubmitTask, newTaskInputRef}) => {

  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitTask();
  }

    return (
        <form className="todo__form" onSubmit={onSubmit} >
        <Field 
        className="todo__field"
        label="New task title"
        id="new-task"
        // value = {newTaskTitle}
        // onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskInputRef}
        />
        <Button type = "submit">Add</Button> 
      </form>
    );
}

export default AddTaskForm;