export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  projectId: string;
  assignedTo?: string;
  createdAt: string;
}
