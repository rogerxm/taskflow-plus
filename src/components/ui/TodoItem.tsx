import React, { useState } from "react";
import { Trash2, CheckCircle2, Circle, GripVertical } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { toggleTodo, deleteTodo } from "../../redux/todoSlice";
import type { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
  index: number;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
  isDraggable: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  isDraggable,
}) => {
  const dispatch = useAppDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch(deleteTodo(todo.id));
    }, 300);
  };

  return (
    <div
      draggable={isDraggable}
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      className={`
        group flex items-center gap-3 p-4 mb-3 bg-gray-800 border border-gray-700 rounded-xl
        transition-all duration-300 hover:border-gray-600 shadow-sm
        ${isDeleting ? "opacity-0 translate-x-10" : "opacity-100"}
        ${todo.completed ? "bg-opacity-40" : "bg-opacity-100"}
        ${isDraggable ? "cursor-grab active:cursor-grabbing" : ""}
      `}
    >
      {isDraggable && (
        <div className="text-gray-600 cursor-grab hover:text-gray-400 transition-colors">
          <GripVertical size={18} />
        </div>
      )}

      <button
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`
          shrink-0 transition-colors duration-300
          ${
            todo.completed
              ? "text-emerald-500"
              : "text-gray-500 hover:text-indigo-400"
          }
        `}
      >
        {todo.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
      </button>

      <div className="grow min-w-0">
        <p
          className={`
          text-sm sm:text-base truncate transition-all duration-300
          ${
            todo.completed
              ? "text-gray-500 line-through decoration-gray-600"
              : "text-gray-200"
          }
        `}
        >
          {todo.text}
        </p>
        <span className="text-[10px] text-gray-600 font-mono">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
      </div>

      <button
        onClick={handleDelete}
        className="opacity-0 group-hover:opacity-100 p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
