import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Task } from '../types';

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    highPriority: tasks.filter((t) => t.priority === 'high').length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Tasks</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Completed</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.completed}</p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">In Progress</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.inProgress}</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">High Priority</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.highPriority}</p>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}