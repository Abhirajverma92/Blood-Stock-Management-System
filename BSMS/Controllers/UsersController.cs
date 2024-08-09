using BCrypt.Net;
using BSMS.Models;
using BSMS.services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BSMS.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IHospitalService _hospitalService;
        /*
        [HttpGet]
       public List<User> Users (){

            List<User> users = new List<User>();
            using(var db=new BsmsContext())
            {
                users=db.Users.ToList();
            }
            return users;
        }
        //register_user
        /*[HttpPost]
        public User saveUser(User user) {
            using (var db = new BsmsContext())
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                db.Users.Add(user);
                db.SaveChanges();
            }
            return user;
        }

        public Login verification(Login login)
        {
            User? user;
            using (var db = new BsmsContext())
            {
                user=db.Users.Where(u=>u.Username=user.Username).FirstOrDefault();
                    if (user!=null)
                {
                    if (BCrypt.Net.BCrypt.Verify(user.Password, login.pwd))
                    {
                        if (user.Roleids == 2)
                        {

                        }
                    }
                }
            }
        }*/

        [HttpPost]
        public Hospital saveHopital(Hospital hop)
        {
            Console.WriteLine(hop.tostring());
            using (var db = new BsmsContext())
            {
                hop.Login.Password = BCrypt.Net.BCrypt.HashPassword(hop.Login.Password);
                db.Hospitals.Add(hop);
                db.SaveChanges();
            }
            return hop;
        }
        [HttpPost]
        public Bloodbank saveBloodBank(Bloodbank b)
        {
            using (var db = new BsmsContext())
            {
                b.Login.Password = BCrypt.Net.BCrypt.HashPassword(b.Login.Password);
                db.Bloodbanks.Add(b);
                db.SaveChanges();
            }
            return b;
        }
        [HttpPost]
        public Donor saveDonor(Donor d) { 
        
            
            using( var db=new BsmsContext())
            {
                d.Login.Password= BCrypt.Net.BCrypt.HashPassword(d.Login.Password);
                db.Donors.Add(d);
                db.SaveChanges();
            }
            return d;
        }
        
        [HttpPost]
        public Receiver saveReceiver(Receiver r)
        {
            using (var db = new BsmsContext())
            {
                r.Login.Password = BCrypt.Net.BCrypt.HashPassword(r.Login.Password);
                db.Receivers.Add(r);
                db.SaveChanges();
            }
            return r;

        }
        [HttpGet]
        public List<Bloodproduct> GetBloodproducts()
        {

            List<Bloodproduct> bp = new List<Bloodproduct>();
            using (var db = new BsmsContext())
            {
                bp = db.Bloodproducts.ToList();
            }
            return bp;
        }
        [HttpGet]
        public List<City> GetCity() { 
            List<City> cities = new List<City>();
            using (var db = new BsmsContext()) {
                cities=db.Cities.ToList();
            }
            return cities;
        }

        [HttpPost]
        public User verification(Login login)
        {
            User? user;
            using (var db = new BsmsContext())
            {
                user = db.Users.Where(u => u.Username == login.uname).FirstOrDefault();
                if (user != null)
                {
                    if (BCrypt.Net.BCrypt.Verify(login.pwd, user.Password))
                    {
                        if (user.Roleid == 3)
                        {
                            return db.Users.Where(u => u.Username == login.uname).Include(u => u.Bloodbanks).FirstOrDefault();
                        }
                    }
                }
            }
            return user;
        }

    [HttpGet("checkLicense/{licenseNumber}")]
    public async Task<IActionResult> CheckLicense(string licenseNumber)
    {
        var isAvailable = await _hospitalService.IsLicenseNumberAvailableAsync(licenseNumber);
        return Ok(new { available = isAvailable });
    }
    }

}
