using Microsoft.EntityFrameworkCore;

namespace HelsinkiCityBikeApi.Models
{
    public class StationContext: DbContext
    {
        public DbSet<Station> Stations { get; set; }


        protected readonly IConfiguration Configuration;
        public StationContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // Connect to SQLite database
            options.UseSqlite(Configuration.GetConnectionString("StationsDB"));
        }
    }
}
