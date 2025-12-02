import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTodos } from "../../redux/todoSlice";
import Header from "./Header";
import StatsCard from "../ui/StatsCards";
import AddTodo from "../ui/AddTodo";
import Filters from "../ui/Filters";
import TodoList from "../ui/TodoList";

const AppContent = () => {
  const dispatch = useAppDispatch();
  // Accede a state.todos.items
  const items = useAppSelector((state) => state.todos.items);

  // Cargar localStorage (solo al montar el componente)
  useEffect(() => {
    const saved = localStorage.getItem("redux-todos-plus-v2");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch(setTodos(parsed));
        }
      } catch (e) {
        console.error("Error loading todos", e);
      }
    }
  }, [dispatch]);

  // Guardar localStorage (cada vez que 'items' cambie)
  useEffect(() => {
    localStorage.setItem("redux-todos-plus-v2", JSON.stringify(items));
  }, [items]);

  return (
    <div className="min-h-screen bg-[#0f1117] text-gray-100 font-sans selection:bg-indigo-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-xl mx-auto px-4 py-12 md:py-20">
        <Header />
        <StatsCard />
        <AddTodo />

        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 shadow-2xl">
          <Filters />
          <div className="mt-2">
            <TodoList />
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-gray-600">
          <p>Drag & Drop habilitado en vista "Todas"</p>
        </footer>
      </div>
    </div>
  );
};

export default AppContent;
