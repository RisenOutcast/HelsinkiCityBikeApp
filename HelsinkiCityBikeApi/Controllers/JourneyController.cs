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

        // Get max number of items in journey database.
        [HttpGet("Amount")]
        public int GetMaxJourneysNumber()
        {
            var MaxAmount = journeyContext.Journeys.Count();
            return MaxAmount;
        }

        // Get number of journeys that started from a specific station
        [HttpGet("DepartureStation")]
        public int GetJourneysDepartureNumberByStation(long stationId)
        {
            var journeys = journeyContext.Journeys.Where(journey => journey.DepartureStationId == stationId);
            return journeys.Count();
        }

        // Get number of journeys that ended in a specific station
        [HttpGet("ReturnStation")]
        public int GetJourneysReturnNumberByStation(long stationId)
        {
            var journeys = journeyContext.Journeys.Where(journey => journey.ReturnStationId == stationId);
            return journeys.Count();
        }
    }
}
