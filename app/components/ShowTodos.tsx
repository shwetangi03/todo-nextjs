import mongoose from "mongoose";
import connectionStr from "../database/db";
import Todos from "../database/model/model";
import { useState } from "react";
import { NextResponse } from "next/server";
import Task from "./Task";
import Link from "next/link";

const ShowTodos = async () => {
  const getTodos = async () => {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    if (data.success) return data.result;
    else return null;
  };
  let data: { task: String; completed: false; date: Date; _id: String }[] =
    await getTodos();

  if (!data) data = [];

  return (
    <div>
      <div className="link_container">
        <Link href={"/"} className="all">
          All tasks
        </Link>
        <Link href={"/completed"} className="all comp">
          Completed Tasks
        </Link>
      </div>
      {data.map((ele) => (
        <Task
          task={ele.task}
          completed={ele.completed}
          date={ele.date}
          _id={ele._id}
        ></Task>
      ))}
    </div>
  );
};

export default ShowTodos;
