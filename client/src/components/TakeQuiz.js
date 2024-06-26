import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const TakeQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    // Fetch available quizzes
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get('/api/quizzes', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setQuizzes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuizzes();
  }, []);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Container>
      <h2>Take Quiz</h2>
      {quizzes.length > 0 ? (
        <Form>
          <Form.Group>
            <Form.Label>Select a Quiz</Form.Label>
            <Form.Control as="select" onChange={(e) => handleQuizSelect(e.target.value)}>
              <option value="">Select...</option>
              {quizzes.map((quiz) => (
                <option key={quiz._id} value={quiz._id}>{quiz.title}</option>
              ))}
            </Form.Control>
          </Form.Group>
          {selectedQuiz && (
            <Button variant="primary" className="mt-3">Start Quiz</Button>
          )}
        </Form>
      ) : (
        <p>No quizzes available</p>
      )}
    </Container>
  );
};

export default TakeQuiz;
