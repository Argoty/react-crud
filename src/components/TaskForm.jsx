import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: uuidv4(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir Tarea</h1>
        <input
          placeholder="Escribe tu tarea aqui"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <br></br>
        <textarea
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <br></br>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">Agregar</button>
      </form>
    </div>
  );
}

export default TaskForm;
