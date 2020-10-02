using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        public IActionResult Result(string name, string location, string language, string comment)
        {
            List<string> result = new List<string>() {name, location, language, comment};
            ViewBag.Result = result;
            return View("Result");
        }
    }
}