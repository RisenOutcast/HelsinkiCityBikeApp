using System.ComponentModel.DataAnnotations;

namespace HelsinkiCityBikeApi.Models
{
    public class Journey
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public DateTime Departure { get; set; }
        [Required]
        public DateTime Return { get; set; }
        [Required]
        public int DepartureStationId { get; set; }
        [Required]
        public string DepartureStationName { get; set; }
        [Required]
        public int ReturnStationId { get; set; }
        [Required]
        public string ReturnStationName { get; set; }
        [Required]
        public float? Distance { get; set; }
        [Required]
        public int? Duration { get; set; }

    }
}
