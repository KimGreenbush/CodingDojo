using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            // List<League> WomensTeams = _context.Leagues.Where(w => w.Name.Contains("Womens")).ToList();
            // List<League> HockeyTeams = _context.Leagues.Where(h => h.Sport.Contains("Hockey")).ToList();
            // List<League> NotFootball = _context.Leagues.Where(nf => nf.Sport != "football").ToList();
            // List<League> Conference = _context.Leagues.Where(c => c.Name.Contains("Conference")).ToList();
            // List<League> AtlanticLeague = _context.Leagues.Where(a => a.Name.Contains("Atlantic")).ToList();
            // List<Team> Dallas = _context.Teams.Where(d => d.Location.Contains("Dallas")).ToList();
            // List<Team> Raptors = _context.Teams.Where(r => r.TeamName.Contains("Raptors")).ToList();
            // List<Team> InACity = _context.Teams.Where(i => i.Location.Contains("City")).ToList();
            // List<Team> tTeam = _context.Teams.Where(t => t.TeamName.Contains("T")).ToList();
            // List<Team> Alpha = _context.Teams.OrderBy(a => a.TeamName).ToList();
            // List<Team> Zeta = _context.Teams.OrderByDescending(a => a.TeamName).ToList();
            // List<Player> Coopers = _context.Players.Where(cp => cp.LastName.Contains("Cooper")).ToList();
            // List<Player> Josh = _context.Players.Where(j => j.FirstName.Contains("Joshua")).ToList();
            // List<Player> CooperNotJosh = Coopers.Except(Josh).ToList();
            // List<Player> WyAlex = _context.Players.Where(a => a.FirstName.Contains("Alexander")).Concat(_context.Players.Where(w => w.FirstName.Contains("Wyatt"))).ToList();
            ViewBag.WomensTeams = _context.Leagues.Where(w => w.Name.Contains("Womens")).ToList();
            ViewBag.HockeyTeams = _context.Leagues.Where(h => h.Sport.Contains("Hockey")).ToList();
            ViewBag.NotFootball = _context.Leagues.Where(nf => nf.Sport != "football").ToList();
            ViewBag.Conference = _context.Leagues.Where(c => c.Name.Contains("Conference")).ToList();
            ViewBag.AtlanticLeague = _context.Leagues.Where(a => a.Name.Contains("Atlantic")).ToList();
            ViewBag.Dallas = _context.Teams.Where(d => d.Location.Contains("Dallas")).ToList();
            ViewBag.Raptors = _context.Teams.Where(r => r.TeamName.Contains("Raptors")).ToList();
            ViewBag.InACity = _context.Teams.Where(i => i.Location.Contains("City")).ToList();
            ViewBag.tTeam = _context.Teams.Where(t => t.TeamName.Contains("T")).ToList();
            ViewBag.Alpha = _context.Teams.OrderBy(a => a.TeamName).ToList();
            ViewBag.Zeta = _context.Teams.OrderByDescending(a => a.TeamName).ToList();
            ViewBag.Coopers = _context.Players.Where(cp => cp.LastName.Contains("Cooper")).ToList();
            ViewBag.Josh = _context.Players.Where(j => j.FirstName.Contains("Joshua")).ToList();
            List<Player> Coopers = _context.Players.Where(cp => cp.LastName.Contains("Cooper")).ToList();
            List<Player> Josh = _context.Players.Where(j => j.FirstName.Contains("Joshua")).ToList();
            ViewBag.CooperNotJosh = Coopers.Except(Josh).ToList();
            ViewBag.WyAlex = _context.Players.Where(a => a.FirstName.Contains("Alexander")).Concat(_context.Players.Where(w => w.FirstName.Contains("Wyatt"))).ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}