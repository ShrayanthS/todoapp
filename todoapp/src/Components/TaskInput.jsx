import axios from "axios";
import React, { useState } from "react";

export const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        text: task,
        completed: false,
      });

      addTask(response.data);
      setTask("");
    } catch (error) {
      console.error(
        "error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleTask} className="border-2 px-2 py-4 ">
        <input
          className="border-2"
          type="text"
          placeholder="enter task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <br />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-1.5">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
