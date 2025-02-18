'use client';
import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { useRouter } from "next/router";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo(title);
    router.push("/");
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>
    </div>
  );
}
