using QuizApp.Strategies;
namespace QuizApp.Factories
{
public class ScoreFactory
{
    public IScore GetStrategy(string questionType)
    {
        return questionType switch
        {
            "Radio" => new RadioScore(),
            "Checkbox" => new CheckboxScore(),
            "Textbox" => new TextboxScore(),
            _ => throw new NotSupportedException($"Unsupported question type: {questionType}")
        };
    }
}
}
