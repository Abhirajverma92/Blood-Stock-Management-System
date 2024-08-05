/*using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

using BSMS.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BSMS.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly BsmsContext _context;

        public LoginController(BsmsContext context)
        {
            _context = context;
        }
      
        
        public async Task<ActionResult<IEnumerable<Login>>> login([FromBody] Login login)
        {
            /*
            if (login.username == "admin" && login.password == "admin")
            {
                return Ok(new { Message = "Login Success" });
            }
            await _context.SaveChangesAsync();
            

        }
        
    }
}
*/
