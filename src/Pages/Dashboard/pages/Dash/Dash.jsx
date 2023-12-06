import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; 
import {subjectsData} from '../../../../Data/Data';

const Dash = () => {
  return (
    <div className="dashboard-container">
      <div className="content">
        <div className="dashboard-header">
          <h2><FaGraduationCap /> Dashboard</h2>
          <p>Check your academic performance and grades at a glance.</p>
        </div>

        <div className="dashboard-content">
          {subjectsData.map((item) => (
            <div key={item.id} className="course-item">
              <h3>{item.course}</h3>
              <p>Grade: {item.grade}</p>
              <p>Credit Hours: {item.creditHours}</p>
            </div>
          ))}
        </div>

        <div className="chart-container">
          <p>Chart Goes Here</p>
        </div>
      </div>
    </div>
  );
};

export default Dash;
