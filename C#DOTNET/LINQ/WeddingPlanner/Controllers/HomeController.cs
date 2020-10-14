using System;
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
                    return RedirectToAction("Success", "Home");
                }
            }
            return View("Index", IdxVal);
        }

        [HttpPost("login")]
        public IActionResult LoginUser(LoginUser fromForm)
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
                return RedirectToAction("Success", "Home");
            }
            return View("Index", IdxVal);
        }

        [HttpGet("logout")]
        public RedirectToActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}