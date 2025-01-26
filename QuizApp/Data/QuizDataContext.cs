using Microsoft.EntityFrameworkCore;
using QuizApp.Models;

namespace QuizApp.Data
{
    public class QuizDataContext : DbContext
    {
        public QuizDataContext(DbContextOptions<QuizDataContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Score> Scores { get; set; }
    }
}
