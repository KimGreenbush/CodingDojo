using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Names()
        {
            string sentence = "Lorem ipsum dolor sit amet, con blah blah blah.";
            return View("Index", sentence);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = {
                1,2,3,4,5,6,7,29
            };
            return View("Numbers", numbers);
        }

        [HttpGet("user")]
        public IActionResult OneUser()
        {
            User person = new User()
            {
                FirstName = "Kim",
                LastName = "Greenbush"
            };
            return View("User", person);
        }

        [HttpGet("users")]
        public IActionResult Users()
        {
            List<User> people = new List<User>();
            people.Add(new User {FirstName = "Kim", LastName = "G"});
            people.Add(new User {FirstName = "Buffy", LastName = "G"});
            people.Add(new User {FirstName = "Zelda", LastName = "G"});
            return View("Users", people);
        }

    }
}