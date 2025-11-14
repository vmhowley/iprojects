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
        <Route path="/board" element={<KanbanPage/>} />
        <Route path='*' element={<div className="fixed z-50 inset-0 justify-center items-center flex bg-black">404 + Not Found</div>}/>
      </Route>
    </Routes>
  );
};
