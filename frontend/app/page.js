'use client';
import { useTodo } from "../context/TodoContext";
import Link from "next/link";

export default function Home() {
  const { todos, deleteTodo } = useTodo();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <Link href="/add">
        <button className="bg-blue-500 text-white px-4 py-2 mb-4">Add Todo</button>
      </Link>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="border p-3 flex justify-between items-center mb-2"
          >
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
            <div>
              <Link href={`/edit/${todo._id}`}>
                <button className="bg-green-500 text-white px-3 py-1 mr-2">Edit</button>
              </Link>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="bg-red-500 text-white px-3 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
