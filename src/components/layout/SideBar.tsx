import { useState } from "react";
import {
  Plus,
  LayoutGrid,
  Briefcase,
  ListChecks,
  Timer,
  Network,
  Users,
  Layers,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Projects", to:'/project',icon: <Briefcase size={20} /> },
    { name: "Tasks", to:'/task', icon: <ListChecks size={20} /> },
    { name: "Dashboard", to:'/', icon: <LayoutGrid size={20} /> },
    { name: "Time log", to:'/timer', icon: <Timer size={20} /> },
    { name: "Resource mgnt", to:'/resource', icon: <Network size={20} /> },
    { name: "Users", to:'/users', icon: <Users size={20} /> },
    { name: "", to:'/project', icon: <Layers size={20} /> },
    { name: "Menu settings", to:'/project', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-black text-white h-screen flex flex-col p-6 space-y-10">
      
      {/* Botón Create new project */}
      <button
        className="
          flex items-center gap-4 bg-white text-black p-2 
          rounded-full font-medium text-[14px] shadow
        "
      >
        <span className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center">
          <Plus size={22} />
        </span>
        Create new project
      </button>

      {/* Menu */}
      <nav className="flex flex-col space-y-6">
        {menuItems.map(item => {
          const isActive = item.name === active;

          return (
            <NavLink
              to={item.to}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`
                flex items-center gap-4 p-4 rounded-full text-[14px]
                transition-all duration-200
                ${isActive ? "bg-white text-orange-500 font-medium" : "text-white"}
              `}
            >
              <span className={`${isActive ? "text-orange-500" : "text-white"}`}>
                {item.icon}
              </span>
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
