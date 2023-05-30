using CsvHelper.Configuration;

namespace HelsinkiCityBikeApi.Models
{
    public class JourneyMap : ClassMap<Journey>
    {
        public JourneyMap()
        {
            Map(p => p.Departure).Index(0);
            Map(p => p.Return).Index(1);
            Map(p => p.DepartureStationId).Index(2);
            Map(p => p.DepartureStationName).Index(3);
            Map(p => p.ReturnStationId).Index(4);
            Map(p => p.ReturnStationName).Index(5);
            Map(p => p.Distance).Index(6);
            Map(p => p.Duration).Index(7);
        }
    }
}
