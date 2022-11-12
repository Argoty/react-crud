import { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  useEffect(() => {
    let db = JSON.parse(localStorage.getItem("tasks"));
    if (db === null) setTasks([]);
    else setTasks(db);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
