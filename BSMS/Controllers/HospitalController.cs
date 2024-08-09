using BSMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BSMS.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        /*
        [HttpGet]
        public List<Hospital> Hospitals()
        {

            List<Hospital> hop = new List<Hospital>();
            using (var db = new BsmsContext())
            {
                hop = db.Hospitals.ToList();
            }
            return hop;
        }*/
    }
}
