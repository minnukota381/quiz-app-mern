import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeacherHome from './components/TeacherHome';
import StudentHome from './components/StudentHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher-home" element={<TeacherHome />} />
          <Route path="/student-home" element={<StudentHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
