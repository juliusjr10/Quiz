using Microsoft.AspNetCore.Mvc;
using QuizApp.Models;
using QuizApp.Services;

namespace QuizApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly QuizService _quizService;

        public QuizController(QuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet("questions")]
        public IActionResult GetQuestions()
        {
            var questions = _quizService.GetQuestions();
            return Ok(questions);
        }

        [HttpPost("submit")]
        public IActionResult SubmitQuiz([FromBody] QuizSubmission submission)
        {
            if (submission == null || string.IsNullOrEmpty(submission.Email) || submission.Questions == null)
            {
                return BadRequest(new { Message = "Invalid submission data." });
            }

            int score = _quizService.Submit(submission.Email, submission.Questions);

            return Ok(new { Score = score });
        }

        [HttpGet("scores")]
        public IActionResult GetScores()
        {
            var scores = _quizService.GetScores();
            return Ok(scores);
        }
    }

    public class QuizSubmission
    {
        public string Email { get; set; }
        public List<SubmittedQuestion> Questions { get; set; }
    }
}
