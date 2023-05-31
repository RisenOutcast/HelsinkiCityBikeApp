using CsvHelper;
using HelsinkiCityBikeApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace HelsinkiCityBikeApi.Converters
{
    public class DataConverter
    {
        /// <summary>
        /// Gathers the journey data from the csv -files
        /// </summary>
        /// <returns>
        /// List of Journey -objects
        /// </returns>
        /// <param name="file">File name</param>
        public static List<Journey> GetJourneyDataFromCSV(string file)
        {
            using var reader = new StreamReader("./Data/" + file);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            csv.Context.RegisterClassMap<JourneyMap>();
            var records = csv.GetRecords<Journey>();
            List<Journey> JourneyList = new();
            foreach (var record in records)
            {
                if (record.Distance >= 10 && record.Duration >= 10)
                {
                    JourneyList.Add(record);
                }
            }

            return JourneyList;
        }

        /// <summary>
        /// Gathers the station data from the csv -files
        /// </summary>
        /// <returns>
        /// List of Station -objects
        /// </returns>
        /// <param name="file">File name</param>
        public static List<Station> GetStationDataFromCSV(string file)
        {
            using var reader = new StreamReader("./Data/csv/" + file);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            
            csv.Context.RegisterClassMap<StationMap>();
            var records = csv.GetRecords<Station>();
            return records.ToList();
        }
    }
}
