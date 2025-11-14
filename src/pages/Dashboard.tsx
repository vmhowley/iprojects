import React from "react";
import {
  Briefcase,
  ListChecks,
  Timer,
  Users
} from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Datos de ejemplo para la gráfica
  const chartData = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "Hours logged",
        data: [8, 6, 7, 5, 9, 4, 8],
        borderColor: "#FF7A00",
        backgroundColor: "rgba(255,122,0,0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#CCC" } },
      y: { grid: { display: true, color: "#333" }, ticks: { color: "#CCC" } }
    }
  };

  return (
    <div className="space-y-8">

      {/* --- Cards resumen --- */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex items-center gap-4">
          <Briefcase size={28} className="text-orange-500" />
          <div>
            <div className="text-xl font-semibold text-white">48</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex items-center gap-4">
          <ListChecks size={28} className="text-orange-500" />
          <div>
            <div className="text-xl font-semibold text-white">129</div>
            <div className="text-sm text-gray-400">Tasks this week</div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex items-center gap-4">
          <Timer size={28} className="text-orange-500" />
          <div>
            <div className="text-xl font-semibold text-white">56h</div>
            <div className="text-sm text-gray-400">Time logged</div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex items-center gap-4">
          <Users size={28} className="text-orange-500" />
          <div>
            <div className="text-xl font-semibold text-white">23</div>
            <div className="text-sm text-gray-400">Team members</div>
          </div>
        </div>
      </div>

    
      {/* --- Gráfica --- */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">Weekly time log</h3>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* --- Tabla de proyectos --- */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">Recent projects</h3>
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs uppercase bg-[#111111] text-gray-400">
            <tr>
              <th className="p-3">Project</th>
              <th className="p-3">Manager</th>
              <th className="p-3">Status</th>
              <th className="p-3">Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#333] hover:bg-[#222]">
              <td className="p-3">Website Redesign</td>
              <td className="p-3">Alice Johnson</td>
              <td className="p-3"><span className="text-green-400">Active</span></td>
              <td className="p-3">2025-12-15</td>
            </tr>
            <tr className="border-b border-[#333] hover:bg-[#222]">
              <td className="p-3">Mobile App Launch</td>
              <td className="p-3">Mark Smith</td>
              <td className="p-3"><span className="text-yellow-400">Pending</span></td>
              <td className="p-3">2025-12-30</td>
            </tr>
            <tr className="border-b border-[#333] hover:bg-[#222]">
              <td className="p-3">Marketing Campaign</td>
              <td className="p-3">Sandra Lee</td>
              <td className="p-3"><span className="text-red-400">Delayed</span></td>
              <td className="p-3">2025-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
