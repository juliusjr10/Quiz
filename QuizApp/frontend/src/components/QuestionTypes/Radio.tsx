import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';

interface RadioProps {
  question: string;
  options: string[];
  onChange: (value: any) => void;
}

const RadioQuestion: React.FC<RadioProps> = ({ question, options, onChange }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6">{question}</Typography>
      <FormControl component="fieldset">
        <RadioGroup onChange={handleRadioChange}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioQuestion;
