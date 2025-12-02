// src/components/ui/AddTodo.tsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/todoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir una nueva tarea..."
        className="w-full bg-gray-900 border-2 border-gray-700 text-gray-100 rounded-2xl py-4 pl-5 pr-14 
                   focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 
                   placeholder-gray-600 transition-all shadow-inner"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="absolute right-2 top-2 bottom-2 aspect-square bg-indigo-600 hover:bg-indigo-500 
                   disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
                   text-white rounded-xl flex items-center justify-center transition-all duration-200"
      >
        <Plus size={24} />
      </button>
    </form>
  );
};

export default AddTodo;
