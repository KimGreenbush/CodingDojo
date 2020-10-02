using Microsoft.AspNetCore.Mvc;

namespace Portfolio1.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet("Projects")]
        public ViewResult Projects()
        {
            return View("Projects");
        }

        [HttpGet("contact")]
        public ViewResult Contact()
        {
            return View("Contact");
        }
    }
}