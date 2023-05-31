using HelsinkiCityBikeApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelsinkiCityBikeApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StationController : ControllerBase
    {
        private StationContext stationContext;
        public StationController(StationContext _stationContext)
        {
            stationContext = _stationContext;
        }

        // Get all stations or if there are parameters, filter some books.
        [HttpGet("")]
        public ActionResult<List<Station>> GetStrings()
        {
            var stations = stationContext.Stations.AsQueryable();

            return stations.ToList();
        }
    }
}
