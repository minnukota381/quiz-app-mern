import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeacherHome from './components/TeacherHome';
import StudentHome from './components/StudentHome';
import AddQuiz from './components/AddQuiz'; // Import AddQuiz component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher-home" element={<TeacherHome />} />
          <Route path="/student-home" element={<StudentHome />} />
          <Route path="/add-quiz" element={<AddQuiz />} /> {/* Add route for AddQuiz */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
