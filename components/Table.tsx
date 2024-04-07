// Table.tsx
import React, { useState } from 'react';

interface Task {
  "Sr No.": number;
  taskType: string;
  deadline: { from: string; to: string };
  assignee: string;
  priority: string;
  teamMember: string[];
  description: string;
  userRole: string;
  taskActivity: string;
}

interface Props {
  tasks: Task[];
}

const Table: React.FC<Props> = ({ tasks }) => {
  const [filters, setFilters] = useState({ deadline: '', priority: '', taskActivity: '' });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>, filterName: string) => {
    const { value } = event.target;
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filters.deadline === '' || (filters.deadline === 'old' && new Date(task.deadline.to) < new Date()) ||
        (filters.deadline === 'new' && new Date(task.deadline.to) >= new Date())) &&
      (filters.priority === '' || task.priority === filters.priority) &&
      (filters.taskActivity === '' || task.taskActivity === filters.taskActivity)
    );
  });

  return (
    <div>
      <div>
        <label>Deadline Time:</label>
        <select onChange={(e) => handleFilterChange(e, 'deadline')}>
          <option value="">All</option>
          <option value="old">Old</option>
          <option value="new">New</option>
        </select>
      </div>
      <div>
        <label>Priority:</label>
        <select onChange={(e) => handleFilterChange(e, 'priority')}>
          <option value="">All</option>
          <option value="HIGH PRIORITY">High Priority</option>
          <option value="PRIORITY">Priority</option>
          <option value="NORMAL">Normal</option>
        </select>
      </div>
      <div>
        <label>Task Activity:</label>
        <select onChange={(e) => handleFilterChange(e, 'taskActivity')}>
          <option value="">All</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Sr No.</th>
            <th style={headerCellStyle}>Task Type</th>
            <th style={headerCellStyle}>Deadline Time</th>
            <th style={headerCellStyle}>Assignee</th>
            <th style={headerCellStyle}>Priority</th>
            <th style={headerCellStyle}>Team Member</th>
            <th style={headerCellStyle}>Description</th>
            <th style={headerCellStyle}>User Role</th>
            <th style={headerCellStyle}>Task Activity</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td style={cellStyle}>{task["Sr No."]}</td>
              <td style={cellStyle}>{task.taskType}</td>
              <td style={cellStyle}>{`${task.deadline.from} - ${task.deadline.to}`}</td>
              <td style={cellStyle}>{task.assignee}</td>
              <td style={cellStyle}>{task.priority}</td>
              <td style={cellStyle}>{task.teamMember.join(', ')}</td>
              <td style={cellStyle}>{task.description}</td>
              <td style={cellStyle}>{task.userRole}</td>
              <td style={cellStyle}>{task.taskActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerCellStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  textAlign: 'left',
};

const cellStyle: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default Table;
