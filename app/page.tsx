'use client';

import { Todo } from "@/types";
import axios from 'axios'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await axios.get('/api/todo')

      console.log("TODOS : ", todos)
    }

    fetchTodos()
  }, [])

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="w-fit h-fit border-violet-700 border-2 p-5 rounded-lg">
        <h1 className="text-center text-2xl">LIST</h1>
        <hr className="my-2" />
        {/* {todos.map((todo) => (
          <div className="bg-violet-600 m-2 p-2 text-center rounded-lg">
            <h2>{todo.toDoTitle}</h2>
            <p>{todo.toDoCategory}</p>
            <p>{todo.toDoCompleted}</p>
          </div>
        ))} */}
        <hr className="my-2" />
        <div>
          <input type="text" className="rounded-lg h-8 bg-transparent border-violet-700 pl-2 border-2 placeholder:text-sm" placeholder="Type Here" />
        </div>
        <div className="flex">
          <select name="" id="" className="bg-transparent border-violet-700 border-2 rounded-lg mt-2 w-full custom-select p-1">
            <option value="">Health</option>
            <option value="">Education</option>
            <option value="">Life</option>
            <option value="">Hobby</option>
          </select>
          <div className="mx-1"></div>
          <button className="w-full border-violet-700 border-2 rounded-lg mt-2 p-1 hover:bg-violet-700">Add</button>
        </div>
      </div>
    </div>
  );
}
