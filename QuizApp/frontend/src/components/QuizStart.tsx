import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './quiz.css';

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleHighscores = () => {
    navigate('/highscores');
  };

  return (
    <div className="quiz-start-container">
      <h1 className="quiz-start-title">Welcome to the NBA Quiz!</h1>
      <Button variant="contained" onClick={onStart} className="start-button">
        Start
      </Button>
      
      <Button
        variant="outlined"
        onClick={handleHighscores}
        className="highscores-button"
        style={{ marginTop: '20px' }}
      >
        Highscores
      </Button>
    </div>
  );
};

export default QuizStart;
