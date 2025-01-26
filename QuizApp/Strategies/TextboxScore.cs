using QuizApp.Models;
namespace QuizApp.Strategies
{
public class TextboxScore : IScore
{
    public int CalculateScore(Question question, SubmittedQuestion submittedQuestion)
    {
        return string.Equals(submittedQuestion.SelectedOptions[0].Trim(), question.CorrectAnswers.FirstOrDefault()?.Trim(), StringComparison.OrdinalIgnoreCase) ? 100 : 0;
    }
}
}