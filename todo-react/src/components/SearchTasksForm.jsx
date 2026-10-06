import Field from "./Field";

const SearchTasksForm = ({searchQuery,setSearchQuery}) => {
  return (
    <form className="todo__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field 
      className="todo__field"
      label="Search Task"
      id="search-task"
      type="search"
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value) }
      />
    </form>
  );

}

export default SearchTasksForm;