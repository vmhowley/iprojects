import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import KanbanPage from "../pages/KanBan";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/project" element={<KanbanPage/>} />
      </Route>
    </Routes>
  );
};
