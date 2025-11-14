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
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Projects", to: "/project", icon: <Briefcase size={20} /> },
    { name: "Tasks", to: "/task", icon: <ListChecks size={20} /> },
    { name: "Dashboard", to: "/", icon: <LayoutGrid size={20} /> },
    { name: "Board", to: "/board", icon: <Layers size={20} /> },
    { name: "Time log", to: "/timer", icon: <Timer size={20} /> },
    { name: "Resource mgnt", to: "/resource", icon: <Network size={20} /> },
    { name: "Users", to: "/users", icon: <Users size={20} /> },
    { name: "Menu settings", to: "/project", icon: <Settings size={20} /> },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Crear Proyecto"
        footer={
          <>
            <button
          type="submit"
          className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition"
        >
          Crear Proyecto
        </button>
          </>
        }
      >
        <NewProject />
      </Modal>
      <aside className="w-64 bg-black text-white h-screen flex flex-col p-6 space-y-10">
        {/* Botón Create new project */}
        <button
          onClick={() => setOpen(true)}
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
          {menuItems.map((item) => {
            const isActive = item.name === active;

            return (
              <NavLink
                to={item.to}
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`
              flex items-center gap-4 p-4 rounded-full text-[14px]
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-orange-500 font-medium"
                    : "text-white"
                }
              `}
              >
                <span
                  className={`${isActive ? "text-orange-500" : "text-white"}`}
                >
                  {item.icon}
                </span>
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

const NewProject = () => {
  const [error, setError] = useState()
  const [form, setForm] = useState({ name: "", description: "", owner: "" });
  const handleInput = (e, a) => {
    
    const { name, value } = e;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nombre */}
        <Input
        error={error}
          label="Nombre"
          value={form.name}
          name="name"
          onChange={ handleInput}
          placeholder="Escribe el nombre del proyecto"
        />

        {/* Descripción */}
        <Input
          error={error}
          label="Descripción"
          value={form.description}
          name="description"
          onChange={handleInput}
          placeholder="Describe el proyecto"
        />

        {/* Owner */}
        <Input
          label="Propietario"
          value={form.owner}
          name="owner"
          onChange={handleInput}
          placeholder="Persona responsable"
        />

       
      </form>
    </>
  );
};
