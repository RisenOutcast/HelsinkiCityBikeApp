using CsvHelper.Configuration;

namespace HelsinkiCityBikeApi.Models
{
    public class StationMap : ClassMap<Station>
    {
        public StationMap()
        {
            Map(p => p.Id).Index(0);
            Map(p => p.StopId).Index(1);
            Map(p => p.Nimi).Index(2);
            Map(p => p.Namn).Index(3);
            Map(p => p.Name).Index(4);
            Map(p => p.Osoite).Index(5);
            Map(p => p.Adress).Index(6);
            Map(p => p.Kaupunki).Index(7);
            Map(p => p.Stad).Index(8);
            Map(p => p.Operaattor).Index(9);
            Map(p => p.Kapasiteet).Index(10);
            Map(p => p.Xpos).Index(11);
            Map(p => p.Ypos).Index(12);
        }
    }
}
