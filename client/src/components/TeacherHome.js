// components/TeacherHome.js

import React from 'react';
import { Link } from 'react-router-dom';

const TeacherHome = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // Redirect to login or homepage
  };

  return (
    <div>
      <h2>Teacher Home</h2>
      <Link to="/add-quiz">Add New Quiz</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeacherHome;
