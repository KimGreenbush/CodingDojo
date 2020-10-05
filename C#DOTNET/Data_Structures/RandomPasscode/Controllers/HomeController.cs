using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
// using RandomPasscode.Models;

namespace RandomPasscode
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            char[] strChars = new char[14];
            Random rand = new Random();

            for (int i = 0; i < strChars.Length; i++)
            {
                strChars[i] = chars[rand.Next(chars.Length)];
            }
            string passcode = new String(strChars);
            if (HttpContext.Session.GetInt32("count") == null)
            {
                HttpContext.Session.SetInt32("count", 0);
                ViewBag.Counter = HttpContext.Session.GetInt32("count");
                ViewBag.Passcode = passcode;
            }
            else
            {
                int counter = (int)HttpContext.Session.GetInt32("count")+1;
                HttpContext.Session.SetInt32("count", counter);
                ViewBag.Counter = counter;
                ViewBag.Passcode = passcode;
            }
            return View("Index");
        }
    }

}