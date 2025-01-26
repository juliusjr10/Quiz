import React from 'react';
import CheckboxQuestion from './QuestionTypes/Checkbox.tsx';
import RadioQuestion from './QuestionTypes/Radio.tsx';
import TextQuestion from './QuestionTypes/Textbox.tsx';

interface QuestionProps {
  id: number;
  question: string;
  type: 'Radio' | 'Checkbox' | 'Textbox';
  options?: string[];
  selectedOptions: string[];
  onChange: (id: number, selectedOptions: string[]) => void;
}

const Question: React.FC<QuestionProps> = ({
  id,
  question,
  type,
  options,
  selectedOptions, 
  onChange,
}) => {
  const handleChange = (value: any) => {
    onChange(id, value);
  };

  return (
    <div className="p-4 border mb-4">
      {type === 'Radio' && options && (
        <RadioQuestion question={question} options={options} onChange={handleChange} />
      )}
      {type === 'Checkbox' && options && (
        <CheckboxQuestion question={question} options={options} selectedOptions={selectedOptions} onChange={handleChange} />
      )}
      {type === 'Textbox' && (
        <TextQuestion question={question} onChange={handleChange} />
      )}
    </div>
  );
};

export default Question;
