import Field from "./Field";

const SearchTasksForm = ({onSearchInput}) => {
  return (
    <form className="todo__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field 
      className="todo__field"
      label="Search Task"
      id="search-task"
      type="search"
      onInput={(e) => onSearchInput(e.target.value) }
      />
    </form>
  );

}

export default SearchTasksForm;