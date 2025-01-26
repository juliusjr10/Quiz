import axios from 'axios';

const API_BASE_URL = 'http://localhost:5141/api/quiz';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);
    return response.data;
  } catch (error) {
    throw new Error('Could not fetch questions');
  }
};

export const submitQuiz = async (submission: {
  email: string;
  submittedQuestions: { id: number; selectedOptions: string[] }[];
}) => {
  try {
    const requestBody = {
      Email: submission.email,
      Questions: submission.submittedQuestions.map((q) => ({
        Id: q.id,
        selectedOptions: q.selectedOptions,
      })),
    };

    const response = await axios.post(`${API_BASE_URL}/submit`, requestBody);
    return response.data;
  } catch (error) {
    throw new Error('Could not submit quiz');
  }
};

export const fetchHighScores = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/scores`);
    return response.data;
  } catch (error) {
    throw new Error('Could not fetch scores');
  }
};
