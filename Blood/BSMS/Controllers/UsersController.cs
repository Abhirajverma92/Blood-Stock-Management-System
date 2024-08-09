using BCrypt.Net;
using BSMS.Models;

//using BSMS.services;

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

        

        [HttpGet]
       public List<User> Users (){

            List<User> users = new List<User>();
            using(var db=new BsmsContext())
            {
                users=db.Users.ToList();
            }
            return users;
        }
        
        /*
        public Login verification(Login login)
        {
            User? user;
            using (var db = new BsmsContext())
            {
                user=db.Users.Where(u=>u.Username=user.Username).FirstOrDefault();
                    if (user!=null)
                {
                    if (BCrypt.Net.BCrypt.Verify(user.Password, login.password))
                    {
                        if (user.Roleid == 2)
                        {

                        }
                    }
                }
            }
        }

        */
        



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


                using (var db = new BsmsContext())
                {
                    d.Login.Password = BCrypt.Net.BCrypt.HashPassword(d.Login.Password);
                    db.Donors.Add(d);
                    db.SaveChanges();
                }
                return d;
            }

            [HttpPost]
            public Receiver saveReceiver(Receiver r)
            {
                Console.Write(r.ToString());
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
                    cities = db.Cities.ToList();
                }
                return cities;
            }


            [HttpPost]
            public User verification(Login login)
            {
                User? user;
                using (var db = new BsmsContext())
                {
                    user = db.Users.Where(u => u.Username == login.username).FirstOrDefault();
                    if (user != null)
                    {
                        if (BCrypt.Net.BCrypt.Verify(login.password, user.Password))
                        {

                            if (user.Roleid == 3)

                                if (user.Roleid == 3)

                                {
                                    return db.Users.Where(u => u.Username == login.username).Include(u => u.Bloodbanks).FirstOrDefault();
                                }
                        }
                    }
                }
                return user;
            }
        }

}
