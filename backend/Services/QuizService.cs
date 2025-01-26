using QuizApp.Data;
using QuizApp.Models;
using QuizApp.Factories;
using System.Collections.Generic;
using System.Linq;

namespace QuizApp.Services
{
    public class QuizService
    {
        private readonly QuizDataContext _context;

        public QuizService(QuizDataContext context)
        {
            _context = context;
        }

        public List<Question> GetQuestions() => _context.Questions.ToList();

        public List<Score> GetScores() => _context.Scores
            .OrderByDescending(h => h.Points)
            .Take(10)
            .ToList();

        public int Submit(string email, List<SubmittedQuestion> submittedQuestions)
        {
            int totalScore = 0;
            var factory = new ScoreFactory(); 

            foreach (var submittedQuestion in submittedQuestions)
            {
                var question = _context.Questions.FirstOrDefault(q => q.Id == submittedQuestion.Id);
                if (question != null)
                {
                    var strategy = factory.GetStrategy(question.Type); 
                    totalScore += strategy.CalculateScore(question, submittedQuestion);
                }
            }

            _context.Scores.Add(new Score
            {
                Email = email,
                Points = totalScore,
                Date = DateTime.UtcNow
            });

            _context.SaveChanges();
            return totalScore;
        }
    }
}
