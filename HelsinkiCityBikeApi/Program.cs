using HelsinkiCityBikeApi.Converters;
using HelsinkiCityBikeApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//DataConverter.GetJourneyDataFromCSV("2021-05.csv");
//DataConverter.GetStationDataFromCSV("Helsingin_ja_Espoon_kaupunkipyöräasemat_avoin.csv");

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<JourneyContext>(options =>
   options.UseSqlite(builder.Configuration.GetConnectionString("JourneysDB")));
builder.Services.AddDbContext<StationContext>(options =>
   options.UseSqlite(builder.Configuration.GetConnectionString("StationsDB")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Cors for the client
app.UseCors(options =>
options.WithOrigins("http://localhost:7000")
.AllowAnyMethod()
.AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
