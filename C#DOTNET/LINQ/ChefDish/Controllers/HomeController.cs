using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using ChefDish.Models;
namespace ChefDish.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        public HomeController(MyContext context)
        {
            _context = context;
        }

        //Render routes
        [HttpGet("")]
        public ViewResult Index()
        {
            List<Chef> Chefs = _context.Chefs.ToList();
            return View("Index", Chefs);
        }

        [HttpGet("new")]
        public ViewResult ChefNew()
        {
            return View("Form_Chef");
        }

        [HttpGet("dishes")]
        public ViewResult Dish()
        {
            List<Dish> Dishes = _context.Dishes.ToList();
            return View("Index_Dish");
        }

        [HttpGet("dishes/new")]
        public ViewResult DishNew()
        {
            return View("Form_Dish");
        }

        //Process routes
        [HttpPost("new")]
        public IActionResult CreateChef(Chef fromForm)
        {
            if (ModelState.IsValid)
            {
                _context.Add(fromForm);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("Form_Chef");
            }
        }

        [HttpPost("dishes/new")]
        public IActionResult CreateDish(Dish fromForm)
        {
            if (ModelState.IsValid)
            {
                _context.Add(fromForm);
                _context.SaveChanges();
                return RedirectToAction("dishes");
            }
            else
            {
                return View("Form_Dish");
            }
        }
    }
}