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
        public ActionResult<List<Journey>> GetStrings()
        {
            var journeys = journeyContext.Journeys.AsQueryable();

            return journeys.ToList();
        }
    }
}
