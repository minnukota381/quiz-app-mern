import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const TeacherHome = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // Redirect to login or homepage
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Teacher Home</h2>
          <Link to="/add-quiz">
            <Button variant="primary" className="mt-3">Add New Quiz</Button>
          </Link>
          <Button variant="danger" onClick={handleLogout} className="mt-3 ml-3">Logout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherHome;
