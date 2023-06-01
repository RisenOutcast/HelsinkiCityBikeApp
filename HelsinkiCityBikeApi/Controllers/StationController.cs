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

        // Get all stations or if there are parameters, only some of them.
        [HttpGet("")]
        public ActionResult<List<Station>> GetStations(int? startIndex, int? numberOfItems)
        {
            if(startIndex.HasValue && numberOfItems.HasValue)
            {
                var stations = stationContext.Stations.Skip((int)startIndex).Take((int)numberOfItems).AsQueryable();
                return stations.ToList();
            }
            else
            {
                var stations = stationContext.Stations.AsQueryable();
                return stations.ToList();
            }
        }

        // Get max number of items in stations database.
        [HttpGet("Amount")]
        public int GetMaxStationsNumber()
        {
            var MaxAmount = stationContext.Stations.Count();
            return MaxAmount;
        }

        // Getting station info with id number, if the id is invalid return 404
        [HttpGet("{stationId}")]
        public ActionResult<Station> GetStationByStopId(long stationId)
        {
            var station = stationContext.Stations.FirstOrDefault(station => station.StopId == stationId);

            if (station != null) 
                return station; 
            else 
                return NotFound();

        }
    }
}
