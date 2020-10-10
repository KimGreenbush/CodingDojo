using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using RegLog.Models;

namespace RegLog.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        // Landing page
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        //Reg, Login, Logout
        [HttpPost("register")]
        public IActionResult CreateUser(User newUser)
        {
            if (ModelState.IsValid)
            {
                if (_context.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email taken.");
                    return View("Index");
                }
                else
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                    _context.Add(newUser);
                    _context.SaveChanges();
                    HttpContext.Session.SetInt32("User", newUser.UserId);
                    return RedirectToAction("Success");
                }
            }
            return View("Index");
        }

        [HttpGet("login")]
        public ViewResult LoginHome()
        {
            return View("Login");
        }

        [HttpPost("login/user")]
        public IActionResult LoginUser(LoginUser user)
        {
            if (ModelState.IsValid)
            {
                var ExistingUser = _context.Users.FirstOrDefault(u => u.Email == user.Email);
                if (ExistingUser == null)
                {
                    ModelState.AddModelError("Email", "Invalid email/password");
                    return View("LoginHome");
                }
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(user, ExistingUser.Password, user.Password);
                if (result == 0)
                {
                    ModelState.AddModelError("Email", "Login error");
                    return View("LoginHome");
                }
                HttpContext.Session.SetInt32("UserId", ExistingUser.UserId);
                return RedirectToAction("Success");
            }
            return View("LoginHome");
        }

        [HttpGet("success")]
        public ViewResult Success()
        {
            if (HttpContext.Session.GetInt32("User") == null)
            {
                return View("Index");
            }
            return View("Success");
        }

        [HttpGet("logout")]
        public RedirectToActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}