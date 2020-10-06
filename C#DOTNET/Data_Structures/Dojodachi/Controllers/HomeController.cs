using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Dojodachi.Models;

namespace Dojodachi
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            Dachi dojodachi = new Dachi();
            if (HttpContext.Session.GetInt32("fullness") == null)
            {
                dojodachi.Fullness = 20;
                dojodachi.Happiness = 20;
                dojodachi.Meals = 3;
                dojodachi.Energy = 50;
                HttpContext.Session.SetInt32("fullness", dojodachi.Fullness);
                HttpContext.Session.SetInt32("happiness", dojodachi.Happiness);
                HttpContext.Session.SetInt32("meals", dojodachi.Meals);
                HttpContext.Session.SetInt32("energy", dojodachi.Energy);
                TempData["message"] = "";
            }
            else
            {
                dojodachi.Fullness = (int)HttpContext.Session.GetInt32("fullness");
                dojodachi.Happiness = (int)HttpContext.Session.GetInt32("happiness");
                dojodachi.Meals = (int)HttpContext.Session.GetInt32("meals");
                dojodachi.Energy = (int)HttpContext.Session.GetInt32("energy");
            }
            return View("Index", dojodachi);
        }

            [HttpGet("feed")]
        public IActionResult Feed()
        {
            int meals = (int)HttpContext.Session.GetInt32("meals");
            if (meals > 0)
            {
                meals -= 1;
                Random rand = new Random();
                if (rand.Next(4) > 1)
                {
                    int adjustment = rand.Next(5, 10);
                    int fullness = (int)HttpContext.Session.GetInt32("fullness") + adjustment;
                    HttpContext.Session.SetInt32("fullness", fullness);
                    TempData["message"] = "You fed your Dojodachi. Meals -1, Fullness +" + adjustment;
                }
                TempData["message"] = "You fed your Dojodachi. Meals -1";
                HttpContext.Session.SetInt32("meals", meals);
            }
            return RedirectToAction("Index");
        }

        [HttpGet("play")]
        public IActionResult Play()
        {
            if (HttpContext.Session.GetInt32("energy") > 0)
            {
                Random rand = new Random();
                int energy = (int)HttpContext.Session.GetInt32("energy") - 5;
                if (rand.Next(4) > 1)
                {
                    int adjustment = rand.Next(5, 10);
                    int happiness = (int)HttpContext.Session.GetInt32("happiness") + adjustment;
                    HttpContext.Session.SetInt32("happiness", happiness);
                    TempData["message"] = "You played with your Dojodachi. Energy -5, Happiness +" + adjustment;
                }
                TempData["message"] = "You played with your Dojodachi. Energy -5";
                HttpContext.Session.SetInt32("energy", energy);
            }
            return RedirectToAction("Index");
        }

        [HttpGet("work")]
        public IActionResult Work()
        {
            if (HttpContext.Session.GetInt32("energy") > 0)
            {
                Random rand = new Random();
                int energy = (int)HttpContext.Session.GetInt32("energy") - 5;
                int adjustment = rand.Next(1, 3);
                int meals = (int)HttpContext.Session.GetInt32("meals") + adjustment;
                HttpContext.Session.SetInt32("energy", energy);
                HttpContext.Session.SetInt32("meals", meals);
                TempData["message"] = "You went to work. Energy -5, Meals +" + adjustment;
            }
            return RedirectToAction("Index");
        }

        [HttpGet("sleep")]
        public IActionResult Sleep()
        {
            int energy = (int)HttpContext.Session.GetInt32("energy") + 15;
            int fullness = (int)HttpContext.Session.GetInt32("fullness") - 5;
            int happiness = (int)HttpContext.Session.GetInt32("happiness") - 5;
            HttpContext.Session.SetInt32("energy", energy);
            HttpContext.Session.SetInt32("fullness", fullness);
            HttpContext.Session.SetInt32("happiness", happiness);
            TempData["message"] = "While went to bed. Energy +15, Fullness - 5, Happiness -5";
            return RedirectToAction("Index");
        }

        [HttpGet("restart")]
        public IActionResult Restart()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}