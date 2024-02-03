"use client";
import React, { useState, useEffect } from "react";

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoName, setTodoName] = useState<string>("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = () => {
    if (todoName.trim() === "") return;

    const newTodo = {
      id: Math.random(),
      title: todoName,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoName("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col space-y-10">
      <div className="p-4 flex flex-row space-y-2 text-black items-center  space-x-3">
        <textarea
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="py-1  px-12 rounded border border-solid border-gray-300 focus:outline-none focus:border-gray-500"
          placeholder="Enter a new todo"
        />
        <button
          onClick={addTodo}
          className="py-2 px-5 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center w-1/3 my-2 p-4  rounded-lg border border-solid border-gray-300 bg-white shadow-md"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
                className="h-6 w-6 text-blue-500 focus:ring-blue-400"
              />
              <p
                className={`text-lg font-medium ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.title}
              </p>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
