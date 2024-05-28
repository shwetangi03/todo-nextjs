"use client";

import React, { useState } from "react";

type Props = {
  task: String;
  completed: Boolean;
  date: Date;
  _id: String;
};

const Task: React.FC<Props> = ({ _id, task, completed, date }) => {
  const [edit, setEdit] = useState(false);
  const [upTask, setUpTask] = useState(task);

  const handleChange = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        task,
        completed: !completed,
      }),
    });

    const data = await response.json();
    if (data.success && !task) alert("Great!, you have completed the task.");
  };

  const handleSave = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        task: upTask,
        completed,
      }),
    });

    const data = await response.json();
    setEdit(false);
    if (data.success && !task) alert("Great!, you have completed the task.");
  };

  const handleDelete = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
      }),
    });

    const data = await response.json();
  };

  return (
    <div className="task_container" id={edit ? "editMode" : ""}>
      <div>
        {!edit && (
          <input
            type="checkbox"
            onChange={handleChange}
            className="chk"
            checked={completed ? true : false}
          />
        )}
        {!edit && <span>{task}</span>}
        {edit && (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline editInput"
            value={upTask}
            onChange={(e) => setUpTask(e.target.value)}
          />
        )}
      </div>
      <div>
        {!edit && (
          <button
            type="button"
            className="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600  focus:border-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none edit"
            data-twe-ripple-init
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
        {!edit && (
          <button
            type="button"
            className="inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 motion-reduce:transition-none delete"
            data-twe-ripple-init
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
        {edit && (
          <button
            type="button"
            className="inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 motion-reduce:transition-none save"
            data-twe-ripple-init
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
