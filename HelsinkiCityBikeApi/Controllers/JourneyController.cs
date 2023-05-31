using HelsinkiCityBikeApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelsinkiCityBikeApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JourneyController : ControllerBase
    {
        private JourneyContext journeyContext;
        public JourneyController(JourneyContext _journeyContext)
        {
            journeyContext = _journeyContext;
        }

        // Get all journeys or if there are parameters, filter some books.
        [HttpGet("")]
        public ActionResult<List<Journey>> GetJourneys(int startIndex, int numberOfItems)
        {
            var journeys = journeyContext.Journeys.Skip(startIndex).Take(numberOfItems).AsQueryable();
            return journeys.ToList();
        }
    }
}
