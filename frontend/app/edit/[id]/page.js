'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";;
import { useTodo } from "../../../context/TodoContext";
import axios from "axios";

export default function EditTodo({ params }) { 
  const { updateTodo } = useTodo();
  const router = useRouter();
  const { id } = params; 

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/todos/${id}`);
        setTitle(response.data.title);
        setCompleted(response.data.completed);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    if (id) fetchTodo();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, { title, completed });
      router.push("/"); 
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-4 text-gray-900"
          required
        />
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            className="mr-2"
          />
          Completed
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Update Todo
        </button>
      </form>
    </div>
  );
}
