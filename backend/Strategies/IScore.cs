namespace QuizApp.Strategies;
using QuizApp.Models;
public interface IScore
{
    int CalculateScore(Question question, SubmittedQuestion submittedQuestion);
}
