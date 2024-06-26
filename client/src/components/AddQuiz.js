import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const AddQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to submit the quiz
    try {
      const newQuiz = { title: quizTitle, questions };
      await axios.post('/api/quizzes', newQuiz, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Quiz added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add quiz');
    }
  };

  return (
    <Container>
      <h2>Add New Quiz</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formQuizTitle">
          <Form.Label>Quiz Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            required
          />
        </Form.Group>
        {/* Add more form controls for questions */}
        <Button variant="primary" type="submit" className="mt-3">Add Quiz</Button>
      </Form>
    </Container>
  );
};

export default AddQuiz;
