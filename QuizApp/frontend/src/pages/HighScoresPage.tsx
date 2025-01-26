import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { fetchHighScores } from '../services/api.ts';
import HighScoreEntry from '../components/HighScoreEntry.tsx';
import { useNavigate } from 'react-router-dom';
import '../components/HighScoreEntry.css';

const HighScoresPage: React.FC = () => {
  const [highScores, setHighScores] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadScores = async () => {
      const data = await fetchHighScores();
      setHighScores(data);
    };
    loadScores();
  }, []);

  const handleBackToQuiz = () => {
    navigate('/');
  };

  return (
    <div className="p-4" style={{ position: 'relative' }}>
      <Button
        variant="contained"
        onClick={handleBackToQuiz}
        className="back-button"
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        Back to Quiz
      </Button>
      <h1 className="header">High Scores</h1>
      {highScores.map((score, idx) => (
        <HighScoreEntry key={idx} position={idx} {...score} />
      ))}
    </div>
  );
};

export default HighScoresPage;
