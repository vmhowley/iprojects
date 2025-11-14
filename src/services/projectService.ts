import { apiGet } from "./api";
import type { Project } from "../types/Project";

export const projectService = {
  getAll: () => apiGet<Project[]>("/projects"),
  getById: (id: string) => apiGet<Project>(`/projects/${id}`)
};
