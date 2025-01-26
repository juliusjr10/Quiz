import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

interface CheckboxProps {
  question: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selectedOptions: string[]) => void;
}

const CheckboxQuestion: React.FC<CheckboxProps> = ({
  question,
  options,
  selectedOptions = [],
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    let updatedSelectedOptions: string[];
    if (checked) {
      updatedSelectedOptions = [...selectedOptions, value];
    } else {
      updatedSelectedOptions = selectedOptions.filter((item) => item !== value);
    }

    onChange(updatedSelectedOptions);
  };

  return (
    <div>
      <Typography variant="h6">{question}</Typography>
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxQuestion;
