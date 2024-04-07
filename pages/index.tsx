import React, { useState } from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Table from '../components/Table';
import Footer from '../components/Footer';
import mockData from '../components/mockData';

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

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [tasks, setTasks] = useState<Task[]>(mockData);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    let updatedTasks: Task[] = [];
    if (tab === 'all') {
      updatedTasks = mockData;
    } else if (tab === 'active') {
      updatedTasks = mockData.filter(task => task.taskActivity !== 'Completed');
    } else if (tab === 'closed') {
      updatedTasks = mockData.filter(task => task.taskActivity === 'Completed');
    }
    setTasks(updatedTasks);
  };

  return (
    <div className="home-page">
      <Header companyName="ProjectManagementApp" userProfile="User Profile" />
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <Table tasks={tasks} />
      <Footer />
    </div>
  );
};

export default HomePage;
