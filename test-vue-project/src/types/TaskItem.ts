export interface AssignedUser {
  id: number;
  name: string;
  email: string;
}

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  assignedUser: AssignedUser;
}