import React, { useState } from 'react';
import './MissingGrade.css';

const MissingGrade = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement form submission logic here (mock-up for simulation)
    // Display a confirmation message
    setFormSubmitted(true);
  };

  return (
    <div className="missing-grade-form">
      <h2>Report Missing Grade</h2>

      {formSubmitted && (
        <div className="confirmation-message">
          Thank you! Your missing grade has been reported.
        </div>
      )}

      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />

          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />

          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />

          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MissingGrade;
