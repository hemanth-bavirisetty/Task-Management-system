export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed' | 'on-hold';
  deadline: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}