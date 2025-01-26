namespace QuizApp.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionTitle { get; set; }
        public string[] Options { get; set; }
        public string[] CorrectAnswers { get; set; }
        public string Type { get; set; }
    }
}
