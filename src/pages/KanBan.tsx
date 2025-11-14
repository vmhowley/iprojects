import { Plus, MoreVertical } from "lucide-react";

export default function KanbanPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Kanban Board</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          <Plus size={18} />
          Add Task
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1 - TODO */}
        <div className="bg-[#1A1A1A] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">To Do</h2>
            <span className="text-sm bg-[#3f3f3f]  px-2 py-1 rounded-lg">3</span>
          </div>

          <div className="space-y-4">
            <TaskCard
              title="Design Login UI"
              tag="Design"
              priority="High"
              color="bg-red-200 text-red-700"
            />
            <TaskCard
              title="Write API documentation"
              tag="Docs"
              priority="Medium"
              color="bg-yellow-200 text-yellow-700"
            />
            <TaskCard
              title="Create project structure"
              tag="Setup"
              priority="Low"
              color="bg-green-200 text-green-700"
            />
          </div>
        </div>

        {/* Column 2 - IN PROGRESS */}
        <div className="bg-[#1A1A1A] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">In Progress</h2>
            <span className="text-sm bg-[#3f3f3f] px-2 py-1 rounded-lg">2</span>
          </div>

          <div className="space-y-4">
            <TaskCard
              title="Implement authentication"
              tag="Backend"
              priority="High"
              color="bg-red-200 text-red-700"
            />
            <TaskCard
              title="Create project overview page"
              tag="UI"
              priority="Medium"
              color="bg-yellow-200 text-yellow-700"
            />
          </div>
        </div>

        {/* Column 3 - COMPLETED */}
        <div className="bg-[#1A1A1A] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Completed</h2>
            <span className="text-sm bg-[#3f3f3f] px-2 py-1 rounded-lg">5</span>
          </div>

          <div className="space-y-4">
            <TaskCard
              title="User research finished"
              tag="UX"
              priority="Low"
              color="bg-green-200 text-green-700"
            />
            <TaskCard
              title="Setup CI/CD"
              tag="DevOps"
              priority="Medium"
              color="bg-yellow-200 text-yellow-700"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function TaskCard({ title, tag, priority, color }) {
  return (
    <div className="bg-[#3f3f3f] p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">{title}</h3>
        <MoreVertical className="text-gray-500" size={18} />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
          {tag}
        </span>
        <span className={`text-xs px-2 py-1 rounded-lg ${color}`}>
          {priority}
        </span>
      </div>
    </div>
  );
}
