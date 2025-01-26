import React, { useState } from 'react';
import { Button } from '@mui/material';
import { submitQuiz } from '../services/api.ts';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './quiz.css';

interface QuizEndProps {
  answers: Record<number, any>;
}

const QuizEnd: React.FC<QuizEndProps> = ({ answers }) => {
  const [email, setEmail] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSubmit = async () => {
    if (!email) return;

    const submittedQuestions = Object.entries(answers).map(([id, selectedOptions]) => ({
      id: parseInt(id, 10),
      selectedOptions: Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions],
    }));

    try {
      const result = await submitQuiz({ email, submittedQuestions });
      setScore(result.score);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const handleRedirect = () => {
    // Navigate to the highscores page
    navigate('/highscores');
  };

  if (isSubmitted) {
    return (
      <div className="quiz-end-container">
        <h2 className="quiz-end-title">Quiz Completed!</h2>
        <p>Your score: {score ?? 'N/A'}</p>
        <Button
          variant="contained"
          onClick={handleRedirect}
          className="redirect-button"
        >
          View Highscores
        </Button>
      </div>
    );
  }

  return (
    <div className="quiz-end-container">
      <h2 className="quiz-end-title">Quiz Completed!</h2>
      <p>Review your score by submitting your email:</p>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!email}
        className="submit-button"
      >
        Submit
      </Button>
    </div>
  );
};

export default QuizEnd;
