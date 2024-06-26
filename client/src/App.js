// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeacherHome from './components/TeacherHome';
import StudentHome from './components/StudentHome';
import PrivateRoute from './components/PrivateRoute'; // Custom PrivateRoute component for authenticated routes

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher-home" element={<PrivateRoute role="teacher" component={TeacherHome} />} />
          <Route path="/student-home" element={<PrivateRoute role="student" component={StudentHome} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
