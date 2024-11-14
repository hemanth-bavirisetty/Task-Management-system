import React from 'react';
import { Clock, Flag, MoreVertical } from 'lucide-react';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  'todo': 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  'completed': 'bg-green-100 text-green-800',
  'on-hold': 'bg-orange-100 text-orange-800',
};

export function TaskCard({ task, onStatusChange, onEdit, onDelete }: TaskCardProps) {
  const daysUntilDeadline = Math.ceil(
    (new Date(task.deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800 line-clamp-1">{task.title}</h3>
        <div className="relative group">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
            <div className="py-1">
              <button
                onClick={() => onEdit(task)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          <Flag className="w-3 h-3 inline-block mr-1" />
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
          className={`px-2 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${statusColors[task.status]}`}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="on-hold">On Hold</option>
        </select>
      </div>
      
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        <span className={daysUntilDeadline < 0 ? 'text-red-500' : daysUntilDeadline <= 3 ? 'text-yellow-500' : ''}>
          {daysUntilDeadline < 0
            ? `${Math.abs(daysUntilDeadline)} days overdue`
            : daysUntilDeadline === 0
            ? 'Due today'
            : `${daysUntilDeadline} days left`}
        </span>
      </div>
    </div>
  );
}