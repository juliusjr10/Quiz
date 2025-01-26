using QuizApp.Models;

namespace QuizApp.Strategies
{
    public class CheckboxScore : IScore
    {
        public int CalculateScore(Question question, SubmittedQuestion submittedQuestion)
        {
            var correctOptions = question.CorrectAnswers;
            var submittedOptions = submittedQuestion.SelectedOptions;

            if (correctOptions == null || submittedOptions == null) return 0;

            int correctCount = correctOptions.Length;
            int correctlyChecked = submittedOptions.Intersect(correctOptions).Count();

            if (correctCount > 0)
            {
                int score = (int)((100.0 / correctCount) * correctlyChecked);

                if (((100.0 / correctCount) * correctlyChecked) % 1 != 0)
                {
                    score++;
                }

                return score;
            }

            return 0;
        }
    }
}
