import React from 'react';
import { Typography } from '@mui/material';
import './HighScoreEntry.css';

const HighScoreEntry = ({ position, email, points, date }: any) => {

  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze

  const getMedalColor = (position: number) => {
    if (position === 0) return medalColors[0];
    if (position === 1) return medalColors[1];
    if (position === 2) return medalColors[2];
    return '#000';
  };

  return (
    <div className="high-score-entry">
      <Typography className="name" sx={{ color: getMedalColor(position) }}>
        {position + 1}. {email} - {points} points ({new Date(date).toLocaleDateString()})
      </Typography>
    </div>
  );
};

export default HighScoreEntry;
