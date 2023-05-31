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
        public ActionResult<List<Station>> GetStrings(int? startIndex, int? numberOfItems)
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
    }
}
