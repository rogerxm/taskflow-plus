import { CalendarDays } from "lucide-react";

const Header = () => (
  <header className="mb-10 text-center">
    <div className="flex items-center justify-center gap-3 mb-2">
      <div className="bg-linear-to-tr from-indigo-500 to-purple-500 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
        <CalendarDays className="text-white" size={24} />
      </div>
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
        TaskFlow<span className="text-indigo-500">.</span>Plus
      </h1>
    </div>
    <p className="text-gray-500">Organiza tu día, alcanza tus metas.</p>
  </header>
);

export default Header;
