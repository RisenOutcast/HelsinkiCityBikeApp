using CsvHelper;
using HelsinkiCityBikeApi.Models;
using System.Globalization;

namespace HelsinkiCityBikeApi.Converters
{
    public class DataConverter
    {
        /// <summary>
        /// Gathers the journey data from the csv -files
        /// </summary>
        /// <param name="file">File name</param>
        public static void GetJourneyDataFromCSV(string file)
        {
            using (var reader = new StreamReader("./Data/csv/" + file))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Context.RegisterClassMap<JourneyMap>();
                var records = csv.GetRecords<Journey>();
                foreach (var record in records)
                {
                    Console.WriteLine(record.Departure);
                }
            }
        }

        /// <summary>
        /// Gathers the station data from the csv -files
        /// </summary>
        /// <param name="file">File name</param>
        public static void GetStationDataFromCSV(string file)
        {
            using (var reader = new StreamReader("./Data/csv/" + file))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Context.RegisterClassMap<StationMap>();
                var records = csv.GetRecords<Station>();
                foreach (var record in records)
                {
                    Console.WriteLine(record.Name);
                }
            }
        }
    }
}
