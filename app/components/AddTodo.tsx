"use client";

import mongoose from "mongoose";
import { FormEventHandler, useState } from "react";
import connectionStr from "../database/db";
import Todos from "../database/model/model";
import { NextResponse } from "next/server";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: newTodo,
        completed: true,
        date: new Date(),
      }),
    });
    const data = response.json();
    return NextResponse.json({
      result: response,
      success: true,
    });
  };

  return (
    <div>
      <div className="w-full max-w-lg margin-auto">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4 mt-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add New Todo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="New Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              +Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
