import React, { useRef } from "react";
import { LayoutList } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reorderTodos } from "../../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const items = useAppSelector((state) => state.todos.items);
  const filter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();
  const draggingItem = useRef<number | null>(null);

  // El filtrado se realiza aquí, basándose en el estado de Redux
  const filteredTodos = items.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleDragStart = (e: React.DragEvent, position: number) => {
    draggingItem.current = position;
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, position: number) => {
    if (draggingItem.current === null) return;

    // Obtener el índice real del item donde se soltó
    const droppedItem = filteredTodos[position];
    const toIndex = items.findIndex((t) => t.id === droppedItem.id);

    if (draggingItem.current !== toIndex) {
      dispatch(
        reorderTodos({
          fromIndex: draggingItem.current,
          toIndex: toIndex,
        })
      );
    }
    draggingItem.current = null;
  };

  const isDraggable = filter === "all";

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <div className="bg-gray-800/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <LayoutList size={24} className="opacity-50" />
        </div>
        <p>No hay tareas en esta vista.</p>
      </div>
    );
  }

  // Si la lista está filtrada, el Drag & Drop debe usar los índices originales
  return (
    <div className="space-y-1">
      {filteredTodos.map((todo) => {
        // Encontrar el índice REAL en la lista `items` (estado global) para el reordenamiento
        const realIndex = items.findIndex((t) => t.id === todo.id);

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Importante: para el D&D, pasamos el índice real (realIndex)
            index={realIndex}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            isDraggable={isDraggable}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
