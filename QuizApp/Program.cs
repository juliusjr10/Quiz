using Microsoft.EntityFrameworkCore;
using QuizApp.Data;
using QuizApp.Services;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<QuizDataContext>(options =>
    options.UseInMemoryDatabase("QuizData"));
builder.Services.AddScoped<QuizService>();
builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<QuizDataContext>();
    SeedData.Initialize(context);
}

app.UseCors("AllowFrontend");
app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapControllers());

app.Run();
