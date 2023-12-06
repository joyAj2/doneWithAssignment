import React, { useState } from 'react';
import './GradeReport.css';
import {subjectsData} from '../../../../Data/Data';

const GradeReport = () => {
  const [selectedSemester, setSelectedSemester] = useState('All');

  const handleFilterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const filteredData =
    selectedSemester === 'All'
      ? subjectsData
      : subjectsData.filter((item) => item.semester === selectedSemester);

  return (
    <div className="grade-report">
      <h2>Grade Report</h2>

      <div className="filter-section">
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          value={selectedSemester}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Fall 2022">Fall 2022</option>
          <option value="Spring 2023">Spring 2023</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="report-content">
        {filteredData.map((item) => (
          <div key={item.id} className="course-item">
            <h3>{item.course}</h3>
            <p>Grade: {item.grade}</p>
            <p>Semester: {item.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReport;
