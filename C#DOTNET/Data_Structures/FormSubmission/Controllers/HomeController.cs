using System;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("register")]
        public IActionResult Register(User fromForm)
        {
            if (ModelState.IsValid)
            {
                User person = new User();
                return RedirectToAction("NewUser", person);
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("newuser")]
        public ActionResult NewUser()
        {
            return View("Success");
        }
    }
}

