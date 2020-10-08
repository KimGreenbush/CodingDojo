using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Crudelicious.Models;

namespace Crudelicious.Controllers
{
    public class HomeController : Controller
    {
        private DishContext _context;

        public HomeController(DishContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public ViewResult Index()
        {
            List<Dish> RecentDishes = _context.Dishes.OrderByDescending(d => d.CreatedAt).Take(5).ToList();
            return View("Index", RecentDishes);
        }

        [HttpGet("new")]
        public ViewResult NewDish()
        {
            return View("DishForm");
        }

        [HttpPost("create")]
        public IActionResult CreateDish(Dish fromForm)
        {
            if(ModelState.IsValid)
            {
                _context.Add(fromForm);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
            return View("DishForm");
            }
        }

        [HttpGet("{DishId}")]
        public ViewResult DishInfo(int DishId)
        {
            Dish DishToDisplay = _context.Dishes.FirstOrDefault(d => d.DishId == DishId);
            return View("Dish", DishToDisplay);
        }

        [HttpGet("edit/{DishId}")]
        public ViewResult EditDish(int DishId)
        {
            Dish DishToDisplay = _context.Dishes.FirstOrDefault(d => d.DishId == DishId);
            return View("DishFormEdit", DishToDisplay);
        }

        [HttpPost("update/{DishId}")]
        public IActionResult UpdateDish(Dish fromForm, int DishId)
        {
            fromForm.DishId = DishId;
            _context.Update(fromForm);
            _context.Entry(fromForm).Property("CreatedAt").IsModified = false;
            _context.SaveChanges();
            return RedirectToAction("DishInfo");
        }

        [HttpGet("delete/{DishId}")]
        public IActionResult DeleteDish(int DishId)
        {
            Dish DishToDelete = _context.Dishes.FirstOrDefault(d => d.DishId == DishId);
            _context.Dishes.Remove(DishToDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}