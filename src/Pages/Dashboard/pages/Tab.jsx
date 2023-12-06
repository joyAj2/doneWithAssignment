import React from 'react'
import Dash from './Dash/Dash';
import GradeReport from './GradeReport/GradeReport';
import MissingGrade from './MissingGrade/MissingGrade';
import InstructorContact from './InstructorContact/InstructorContact';
import Help from './Help/Help';

const Tab = ({ activeTab }) => {
  switch (activeTab) {
    case 1:
      return <Dash />;
    case 2:
      return <GradeReport />;
    case 3:
      return <MissingGrade/>;
    case 4:
      return <InstructorContact/>
      case 5:
        return <Help />;
    default:
      return <Dash />;
  }
}

export default Tab