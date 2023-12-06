import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css';
import Tab from './pages/Tab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="dashboard-container">
      <Sidebar setActiveTab={setActiveTab}/>

      <div className="content">
        <div className="dashboard-content">
          <Tab activeTab={activeTab}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
