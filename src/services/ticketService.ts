import { apiGet, apiPost } from "./api";
import type { Ticket } from "../types/Ticket";

export const ticketService = {
  getByProject: (projectId: string) => apiGet<Ticket[]>(`/tickets/${projectId}`),

  create: (ticket: Partial<Ticket>) =>
    apiPost<Ticket>("/tickets", ticket)
};
