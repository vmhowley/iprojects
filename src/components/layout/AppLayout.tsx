import Sidebar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";

const pageTitles = {
"/": "Dashboard",
"/dashboard": "Dashboard",
"/projects": "Projects",
"/tasks": "Tasks",
"/time-log": "Time log",
"/resources": "Resource management",
"/users": "Users",
"/templates": "Project templates",
"/settings": "Menu settings",
};
export const AppLayout = () => {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0E0E0E]"> 
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP NAVBAR (opcional según tu diseño del Figma) */}
        <header className="h-16 border-b border-white/10 flex items-center px-6 text-white">
          <h1 className="text-xl font-semibold">{title}</h1>
        </header>

        {/* MAIN CONTENT (scrollable) */}
        <main className="flex-1 overflow-y-auto p-6 text-white">
          <Outlet/>
        </main>
        
      </div>
    </div>
  );
};

export default AppLayout;
