using System.ComponentModel.DataAnnotations;

namespace HelsinkiCityBikeApi.Models
{
    public class Station
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int StopId { get; set; }
        [Required]
        public string Nimi { get; set; }
        [Required]
        public string Namn { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Osoite { get; set; }
        [Required]
        public string Adress { get; set; }
        public string? Kaupunki { get; set; }
        public string? Stad { get; set; }
        public string? Operaattor { get; set; }
        [Required]
        public int Kapasiteet { get; set; }
        [Required]
        public float Xpos { get; set; }
        [Required]
        public float Ypos { get; set; }

    }
}
