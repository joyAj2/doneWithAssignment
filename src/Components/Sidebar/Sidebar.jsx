import React from 'react';
import './Sidebar.css';
import { sidebarData } from '../../Data/Data';

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        {sidebarData.map((item) => (
          <li key={item.id} onClick={() => setActiveTab(item.id)}>
            <span className="icon" >{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
