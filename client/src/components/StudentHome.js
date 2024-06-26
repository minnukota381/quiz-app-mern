// components/StudentHome.js

import React from 'react';
import { Link } from 'react-router-dom';

const StudentHome = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // Redirect to login or homepage
  };

  return (
    <div>
      <h2>Student Home</h2>
      <Link to="/take-quiz">Take Quiz</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentHome;
