using System;
using Microsoft.AspNetCore.Mvc;


namespace TimeDisplay.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            DateTime CurrentTime = DateTime.Now;
            ViewBag.Time = CurrentTime.ToString("MMMM dd, yyyy HH:mm:ss");
            return View("index");
        }
    }
}