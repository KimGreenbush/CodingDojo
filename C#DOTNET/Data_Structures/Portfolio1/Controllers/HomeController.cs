using Microsoft.AspNetCore.Mvc;
namespace Portfolio1.Controllers
{
    public class HelloController : Controller
    {

        [HttpGet]
        [Route("")]
        public string Index()
        {
            return "This is my Index.";
        }

        [HttpGet("Projects")]
        public string Projects()
        {
            return "These are my projects.";
        }

        [HttpGet("contact")]
        public string Contact()
        {
            return "This is my Contact.";
        }
    }
}