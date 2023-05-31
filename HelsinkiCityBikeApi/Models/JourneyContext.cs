using Microsoft.EntityFrameworkCore;

namespace HelsinkiCityBikeApi.Models
{
    public class JourneyContext : DbContext
    {
        public DbSet<Journey> Journeys { get; set; }


        protected readonly IConfiguration Configuration;
        public JourneyContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // Connect to SQLite database
            options.UseSqlite(Configuration.GetConnectionString("JourneysDB"));
        }
    }
}
