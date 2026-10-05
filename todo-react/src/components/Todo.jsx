import { useState, useEffect } from 'react';

import AddTaskForm from './AddTaskForm';
import SearchTasksForm from './SearchTasksForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';



const Todo = () => {




    const [tasks, setTasks] = useState([
        { id: 'task-1', title: 'Buy bread', isDone: false },
        { id: 'task-2', title: 'Buy grape', isDone: true },
        { id: 'task-3', title: 'Go to university', isDone: true },
        { id: 'task-4', title: 'Go to university', isDone: true },


    ]);


    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure you want to delete all?')
        if (isConfirmed) {
            setTasks([]);
        }
        // console.log('Delete All Tasks');

    }

    const deleteTask = (taskId) => {
        // console.log(`Delete item with id: ${taskId}`);

        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )

    }


    const toggleTaskComplete = (taskId, isDone) => {
        // console.log(`Task ${taskId} ${isDone ? 'Completed' : 'Not Completed'}`);
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }
                return task;
            })
        )
    }

    const onSearchTask = (query) => {
        console.log(`Search Task: ${query}`);
    }


    const onSubmitTask = () => {
        // console.log('Task added!');
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask]);
            setNewTaskTitle('')
        }
    }

    useEffect(()=> {
        console.log('Saved Tasks: ', tasks );
        localStorage.setItem(`tasks`,JSON.stringify(tasks))
    },[tasks])

    useEffect(()=> {
        console.log("Component Todo Smontirovan");
       const savedTasks = localStorage.getItem('tasks')
       if(savedTasks){
        setTasks(JSON.parse(savedTasks));
       }
    },[])

    return (

        <div className="todo">
            <h1 className="todo__title">To Do List</h1>

            <AddTaskForm

                onSubmitTask={onSubmitTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />

            <SearchTasksForm
                onSearchInput={onSearchTask}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}

            />
            <TodoList tasks={tasks}

                onDeleteTaskButtonClick={deleteTask}
                onCompletedBoxClick={toggleTaskComplete}
            />
        </div>
    );
}

export default Todo;