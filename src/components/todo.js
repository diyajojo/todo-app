import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const addTodo = () => {
    if (task.trim().length !== 0) {
      const newTodo = {
        id: tasklist.length + 1,
        task: task,
        completed: false,
        isediting: false,
      };
      setTasklist([...tasklist, newTodo]);
      setTask("");
    }
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const toggleEvent = (id) => {
     setTasklist(tasklist.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
  };
  
  const deleteTodo = (id) =>{
    setTasklist(tasklist.filter((todo) => todo.id !== id));
  }
  

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your tasks" value={task} onChange={handleTask}  className="inputsection"/>
        <button type="submit" className="todo-btn"> Add Task </button>
      </form>
      <div className="task-list">
        {tasklist.map((todo) => (
          <div key={todo.id} className={`todo-item ${ (todo.completed)? 'taskcompleted':'' }`}> 
           <button className="toggle-btn" onClick={() => toggleEvent(todo.id)}></button>
           <p className="taskname">{todo.task}</p> 
           <div className="icons">
            <FontAwesomeIcon icon={faTrash} className="trashicon" style={{ fontSize: "24px" }} onClick={() => deleteTodo(todo.id)}/>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
