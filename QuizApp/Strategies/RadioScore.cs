using QuizApp.Models;
namespace QuizApp.Strategies
{
public class RadioScore : IScore
{
    public int CalculateScore(Question question, SubmittedQuestion submittedQuestion)
    {
        return submittedQuestion.SelectedOptions[0] == question.CorrectAnswers.FirstOrDefault() ? 100 : 0;
    }
}
}