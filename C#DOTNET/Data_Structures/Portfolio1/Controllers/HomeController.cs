using Microsoft.AspNetCore.Mvc;
namespace Portfolio1.Controllers
{
    public class HelloController : Controller
    {

        [HttpGet]
        [Route("")]

        [HttpGet]
        [Route("user/{name}/{location}/{age}")]
        public string UserInfo(string name, string location, int age)
        {
            return $"{name}, aged {age}, is from {location}";
        }

        public string Index()
        {
            return "Hello World from HelloController!";
        }
    }
}