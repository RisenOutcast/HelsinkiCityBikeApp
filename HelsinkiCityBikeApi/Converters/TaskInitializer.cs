using HelsinkiCityBikeApi.Models;

namespace HelsinkiCityBikeApi.Converters
{
    public static class TaskInitializer
    {
        public static WebApplication Seed(this WebApplication app)
        {
            using (var scope = app.Services.CreateScope())
            {
                using var journeyContext = scope.ServiceProvider.GetRequiredService<JourneyContext>();
                try
                {
                    journeyContext.Database.EnsureCreated();

                    var journeys = journeyContext.Journeys.FirstOrDefault();
                    if (journeys == null)
                    {
                        Console.WriteLine("Adding journey data from files...");
                        journeyContext.Journeys.AddRange(DataConverter.GetJourneyDataFromCSV("2021-05.csv"));
                        journeyContext.Journeys.AddRange(DataConverter.GetJourneyDataFromCSV("2021-06.csv"));
                        journeyContext.Journeys.AddRange(DataConverter.GetJourneyDataFromCSV("2021-07.csv"));
                        journeyContext.SaveChanges();
                        Console.WriteLine("Journey data added!");
                    }
                }
                catch (Exception)
                {
                    throw;
                }

                using var stationContext = scope.ServiceProvider.GetRequiredService<StationContext>();
                try
                {
                    stationContext.Database.EnsureCreated();

                    var stations = stationContext.Stations.FirstOrDefault();
                    if (stations == null)
                    {
                        Console.WriteLine("Adding station data from files...");
                        stationContext.Stations.AddRange(DataConverter.GetStationDataFromCSV("Helsingin_ja_Espoon_kaupunkipyöräasemat_avoin.csv"));
                        stationContext.SaveChanges();
                        Console.WriteLine("Station data added!");
                    }
                }
                catch (Exception)
                {
                    throw;
                }
                return app;
            }
        }
    }
}
