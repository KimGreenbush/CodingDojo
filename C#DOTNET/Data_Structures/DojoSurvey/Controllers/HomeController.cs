using System;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")]
        public IActionResult Result(Survey fromForm)
        {
            if (ModelState.IsValid)
            {
                return View("Result", fromForm);
            }
            else
            {
                return View("Index", fromForm);
            }
        }
    }
}