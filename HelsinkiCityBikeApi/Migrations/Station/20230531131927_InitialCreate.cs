using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelsinkiCityBikeApi.Migrations.Station
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StopId = table.Column<int>(type: "INTEGER", nullable: false),
                    Nimi = table.Column<string>(type: "TEXT", nullable: false),
                    Namn = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Osoite = table.Column<string>(type: "TEXT", nullable: false),
                    Adress = table.Column<string>(type: "TEXT", nullable: false),
                    Kaupunki = table.Column<string>(type: "TEXT", nullable: true),
                    Stad = table.Column<string>(type: "TEXT", nullable: true),
                    Operaattor = table.Column<string>(type: "TEXT", nullable: true),
                    Kapasiteet = table.Column<int>(type: "INTEGER", nullable: false),
                    Xpos = table.Column<float>(type: "REAL", nullable: false),
                    Ypos = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stations", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stations");
        }
    }
}
