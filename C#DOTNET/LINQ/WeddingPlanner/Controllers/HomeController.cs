using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        public HomeController(MyContext context)
        {
            _context = context;
        }

        // Page rendering
        [HttpGet("")]
        public ViewResult Index()
        {
            IndexValidations IdxVal = new IndexValidations{};
            return View("Index", IdxVal);
        }

        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
                ViewBag.UserId = (int)HttpContext.Session.GetInt32("UserId");
                List<Wedding> Weddings = _context.Weddings.Include(a => a.RSVPUsers).ThenInclude(b => b.Guest).Include(d => d.Planner).ToList();
                return View("Dashboard", Weddings);
            }
            IndexValidations IdxVal = new IndexValidations{};
            return RedirectToAction("Index");
        }

        [HttpGet("new")]
        public IActionResult NewForm()
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
            Wedding Wedding = new Wedding {};
            return View("NewForm", Wedding);
            }
            IndexValidations IdxVal = new IndexValidations{};
            return RedirectToAction("Index");
        }

        [HttpGet("info/{WedId}")]
        public IActionResult Info(int WedId)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
                Wedding Wedding = _context.Weddings.Include(a => a.RSVPUsers).ThenInclude(b => b.Guest).FirstOrDefault(w => w.WeddingId == WedId);
                return View("Info", Wedding);
            }
            IndexValidations IdxVal = new IndexValidations{};
            return View("Index", IdxVal);
        }

        //Reg, Login, Logout
        [HttpPost("register")]
        public IActionResult Register(User fromForm)
        {
            IndexValidations IdxVal = new IndexValidations{};
            if (ModelState.IsValid)
            {
                if (_context.Users.Any(u => u.Email == fromForm.Email))
                {
                    ModelState.AddModelError("RegisterEmail", "Email taken");
                    return View("Index", IdxVal);
                }
                else
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    fromForm.Password = Hasher.HashPassword(fromForm, fromForm.Password);
                    _context.Add(fromForm);
                    _context.SaveChanges();
                    HttpContext.Session.SetInt32("UserId", fromForm.UserId);
                    return RedirectToAction("Dashboard");
                }
            }
            return View("Index", IdxVal);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser fromForm)
        {
            IndexValidations IdxVal = new IndexValidations{};
            if (ModelState.IsValid)
            {
                User ExistingUser = _context.Users.FirstOrDefault(u => u.Email == fromForm.UserEmail);
                if (ExistingUser == null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid email");
                    return View("Index", IdxVal);
                }
                PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
                PasswordVerificationResult result = Hasher.VerifyHashedPassword(fromForm, ExistingUser.Password, fromForm.UserPassword);
                if (result == 0)
                {
                    ModelState.AddModelError("LoginEmail", "Password error");
                    return View("Index", IdxVal);
                }
                HttpContext.Session.SetInt32("UserId", ExistingUser.UserId);
                return RedirectToAction("Dashboard");
            }
            return View("Index", IdxVal);
        }

        [HttpGet("logout")]
        public RedirectToActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        //Processing
        [HttpPost("new")]
        public IActionResult CreateNew(Wedding fromForm)
        {
            Wedding Wedding = new Wedding {};
            if (ModelState.IsValid)
            {
                int UserId = (int)HttpContext.Session.GetInt32("UserId");
                User ExistingUser = _context.Users.FirstOrDefault(u => u.UserId == UserId);
                fromForm.Planner = ExistingUser;
                _context.Add(fromForm);
                _context.SaveChanges();
                Wedding Wed = _context.Weddings.FirstOrDefault(w => w.WedOne == fromForm.WedOne);
                int WeddingId = Wed.WeddingId;
                return RedirectToAction("Info", new {WedId = WeddingId});
            }
            return View("NewForm");
        }

        [HttpGet("delete/{WedId}")]
        public RedirectToActionResult Delete(int WedId)
        {
            Wedding toDelete = _context.Weddings.FirstOrDefault(w => w.WeddingId == WedId);
            _context.Remove(toDelete);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("rsvp/{WedId}")]
        public RedirectToActionResult RSVP(int WedId)
        {
            int UserId = (int)HttpContext.Session.GetInt32("UserId");
            UserWedding RSVPList = _context.UsersWeddings.Include(b => b.Guest).FirstOrDefault(a => a.UserId == UserId && a.WeddingId == WedId);
            if (RSVPList == null)
            {
                UserWedding NewRSVP = new UserWedding { };
                User ExistingUser = _context.Users.FirstOrDefault(u => u.UserId == UserId);
                Wedding ExistingWedding = _context.Weddings.FirstOrDefault(w => w.WeddingId == WedId);
                NewRSVP.Guest = ExistingUser;
                NewRSVP.AttendingWedding = ExistingWedding;
                _context.Add(NewRSVP);
            }
            else
            {
                _context.Remove(RSVPList);
            }
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
    }
}