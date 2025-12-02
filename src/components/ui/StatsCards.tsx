import { BarChart3 } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";

const StatsCard = () => {
  // Accede a state.todos.items
  const items = useAppSelector((state) => state.todos.items);
  const total = items.length;
  const completed = items.filter((t) => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 mb-8 border border-gray-700/50 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 font-medium flex items-center gap-2">
          <BarChart3 size={18} />
          Progreso
        </h3>
        <span className="text-2xl font-bold text-indigo-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-linear-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
        <span>{completed} Completadas</span>
        <span>{total - completed} Pendientes</span>
      </div>
    </div>
  );
};

export default StatsCard;
