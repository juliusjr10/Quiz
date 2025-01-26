using QuizApp.Data;
using QuizApp.Models;

namespace QuizApp.Data
{
    public static class SeedData
    {
        public static void Initialize(QuizDataContext context)
        {
            if (!context.Questions.Any())
            {
                context.Questions.AddRange(new[]
                {
                    new Question
                    {
                        Id = 1,
                        QuestionTitle = "How many championships have the Boston Celtics won?",
                        Options = new[] { "17", "19", "18" },
                        CorrectAnswers = new[] { "18" },
                        Type = "Radio"
                    },
                    new Question
                    {
                        Id = 2,
                        QuestionTitle = "What term is used to describe a player who records double-digit numbers in three statistical categories (points, rebounds, assists, steals, or blocks) in a single game?",
                        Options = new string[] { },
                        CorrectAnswers = new[] { "Triple Double" },
                        Type = "Textbox"
                    },
                    new Question
                    {
                        Id = 3,
                        QuestionTitle = "Which teams are in the NBA's Atlantic Division?",
                        Options = new[] { "Brooklyn Nets", "Miami Heat", "Denver Nuggets", "New York Knicks"},
                        CorrectAnswers = new[] { "Brooklyn Nets", "New York Knicks"},
                        Type = "Checkbox"
                    },
                    new Question
                    {
                        Id = 4,
                        QuestionTitle = "Who holds the record for the most points per game in NBA history?",
                        Options = new[] { "Michael Jordan", "Kobe Bryant", "Wilt Chamberlain"},
                        CorrectAnswers = new[] { "Wilt Chamberlain"},
                        Type = "Radio"
                    },
                    new Question
                    {
                        Id = 5,
                        QuestionTitle = "Select the teams that have won at least 5 NBA championships",
                        Options = new[] { "Los Angeles Lakers", "Chicago Bulls", "Toronto Raptors"},
                        CorrectAnswers = new[] { "Los Angeles Lakers", "Chicago Bulls"},
                        Type = "Checkbox"
                    },
                    new Question
                    {
                        Id = 6,
                        QuestionTitle = "Who has most points in NBA history?",
                        Options = new[] { "Kobe Bryant", "Lebron James", "Michael Jordan"},
                        CorrectAnswers = new[] { "Lebron James"},
                        Type = "Radio"
                    },
                    new Question
                    {
                        Id = 7,
                        QuestionTitle = "Who has the most defensive rebounds in NBA history?",
                        Options = new[] { "Kevin Garnett", "Karl Malone", "Tim Duncan", "Hakeem Olajuwon"},
                        CorrectAnswers = new[] { "Kevin Garnett"},
                        Type = "Radio"
                    },
                    new Question
                    {
                        Id = 8,
                        QuestionTitle = "How many teams are in NBA?",
                        Options = new string[] { },
                        CorrectAnswers = new[] { "30"},
                        Type = "Textbox"
                    },
                    new Question
                    {
                        Id = 9,
                        QuestionTitle = "How many conferences does the NBA have?",
                        Options = new[] { "1", "2", "3", "6"},
                        CorrectAnswers = new[] { "2"},
                        Type = "Radio"
                    },
                    new Question
                    {
                        Id = 10,
                        QuestionTitle = "Select the teams where Lithuanian players currently play",
                        Options = new[] { "Washington Wizards", "Chicago Bulls", "Sacramento Kings"},
                        CorrectAnswers = new[] { "Washington Wizards", "Chicago Bulls", "Sacramento Kings"},
                        Type = "Checkbox"
                    }
                });
            }

            if (!context.Scores.Any())
            {
                context.Scores.AddRange(new[]
                {
                    new Score { Id = 1, Email = "john10@gmail.com", Points = 300, Date = DateTime.UtcNow.AddDays(-4) },
                    new Score { Id = 2, Email = "player1@gmail.com", Points = 250, Date = DateTime.UtcNow.AddDays(-3) },
                    new Score { Id = 3, Email = "player2@gmail.com", Points = 350, Date = DateTime.UtcNow.AddDays(-2) },
                    new Score { Id = 4, Email = "player3@gmail.com", Points = 450, Date = DateTime.UtcNow.AddDays(-1) },
                    new Score { Id = 5, Email = "player4@gmail.com", Points = 500, Date = DateTime.UtcNow.AddDays(-4) },
                    new Score { Id = 6, Email = "player5@gmail.com", Points = 650, Date = DateTime.UtcNow.AddDays(0) },
                    new Score { Id = 7, Email = "player6@gmail.com", Points = 750, Date = DateTime.UtcNow.AddDays(-6) },
                    new Score { Id = 8, Email = "player7@gmail.com", Points = 850, Date = DateTime.UtcNow.AddDays(-2) },
                    new Score { Id = 9, Email = "player8@gmail.com", Points = 950, Date = DateTime.UtcNow.AddDays(-1) },
                    new Score { Id = 10, Email = "player9@gmail.com", Points = 50, Date = DateTime.UtcNow.AddDays(-3) }
                });
            }

            context.SaveChanges();
        }
    }
}
