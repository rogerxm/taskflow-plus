import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilter } from "../../redux/todoSlice";
import type { FilterType } from "../../types";

const Filters = () => {
  // Accede a state.todos.filter
  const currentFilter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "Todas" },
    { key: "active", label: "Activas" },
    { key: "completed", label: "Completadas" },
  ];

  return (
    <div className="flex gap-2 mb-6 bg-gray-800/40 p-1.5 rounded-xl w-fit mx-auto">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => dispatch(setFilter(f.key))}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
              currentFilter === f.key
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            }
          `}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
