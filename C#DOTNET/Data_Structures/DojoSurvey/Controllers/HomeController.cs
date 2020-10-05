using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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
        public IActionResult Result(Form fromForm)
        {
            return View("Result", fromForm);
        }
    }
}