import React from 'react';
import { TextField, Typography } from '@mui/material';

interface TextboxProps {
  question: string;
  onChange: (value: any) => void;
}

const TextQuestion: React.FC<TextboxProps> = ({ question, onChange }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6">{question}</Typography>
      <TextField 
        variant="outlined" 
        fullWidth 
        onChange={handleTextChange} 
        label="Your Answer" 
      />
    </div>
  );
};

export default TextQuestion;
