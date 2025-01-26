import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { fetchQuestions } from '../services/api.ts'; 
import Question from '../components/Question.tsx';
import QuizStart from '../components/QuizStart.tsx';
import QuizEnd from '../components/QuizEnd.tsx';
import './QuizPage.css';

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [phase, setPhase] = useState<'start' | 'quiz' | 'end'>('start');

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    if (phase === 'quiz') {
      fetchQuizQuestions();
    }
  }, [phase]);

  const handleAnswerChange = (id: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleStart = () => setPhase('quiz');
  const handleQuizEnd = () => setPhase('end');
  const handleBackToStart = () => setPhase('start');

  if (phase === 'start') {
    return (
      <div>
        <QuizStart onStart={handleStart} />
      </div>
    );
  }

  if (phase === 'end') {
    return <QuizEnd answers={answers} />;
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title"onClick={handleBackToStart}>Quiz</h1>

      <div className="stepper-container">
        <Stepper activeStep={activeStep}>
          {questions.map((_, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="question-container">
        {questions[activeStep] && (
          <Question
            id={questions[activeStep].id}
            question={questions[activeStep].questionTitle}
            type={questions[activeStep].type}
            options={questions[activeStep].options}
            onChange={handleAnswerChange}
            selectedOptions={answers[questions[activeStep].id] || []}
          />
        )}
      </div>

      <div className="button-container">
        <Button
          variant="outlined"
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
        >
          Back
        </Button>

        {activeStep < questions.length - 1 ? (
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => Math.min(questions.length - 1, prev + 1))}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleQuizEnd} // Only redirects to QuizEnd
            className="submit-button"
          >
            Finish Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
