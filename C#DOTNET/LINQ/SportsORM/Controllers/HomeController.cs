using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            ViewBag.ASCTeams = _context.Teams.Where(b => b.CurrLeague.Name == "Atlantic Soccer Conference");
            ViewBag.CurrBoston = _context.Players.Where(b => b.CurrentTeam.TeamName == "Penguins" && b.CurrentTeam.Location == "Boston");
            ViewBag.CurrrentICBC = _context.Players.Where(c => c.CurrentTeam.CurrLeague.Name == "International Collegiate Baseball Conference");
            ViewBag.CurrrentACAF = _context.Players.Where(c => c.CurrentTeam.CurrLeague.Name == "American Conference of Amateur Football" && c.LastName == "Lopez");
            ViewBag.AllFoots = _context.Players.Where(a => a.CurrentTeam.CurrLeague.Sport == "Football");
            ViewBag.Sophia = _context.Teams.Where(a => a.CurrentPlayers.Any(b => b.FirstName == "Sophia" || b.LastName == "Sophia"));
            ViewBag.SophiaLeague = _context.Leagues.Where(a => a.Teams.Any(c => c.CurrentPlayers.Any(b => b.FirstName == "Sophia" || b.LastName == "Sophia")));
            ViewBag.SomeFlores = _context.Players.Where(a => a.LastName == "Flores" && a.CurrentTeam.TeamName != "Washington Roughriders");
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            ViewBag.SamuelEvans = _context.Teams.Include(a => a.AllPlayers).ThenInclude(b => b.PlayerOnTeam).Where(d => d.AllPlayers.Any(c => c.PlayerOnTeam.FirstName == "Samuel" && c.PlayerOnTeam.LastName == "Evans"));
            ViewBag.ManitobaTC = _context.Players.Include(a => a.AllTeams).ThenInclude(b => b.TeamOfPlayer).Where(c => c.AllTeams.Any(d => d.TeamOfPlayer.TeamName.Contains("Manitoba")));
            ViewBag.PastWichita = _context.Players.Include(a => a.AllTeams).ThenInclude(b => b.TeamOfPlayer).Where(c => c.AllTeams.Any(d => d.TeamOfPlayer.TeamName.Contains("Vikings") && d.TeamOfPlayer.Location == "Wichita") && c.CurrentTeam.TeamName != "Vikings" && c.CurrentTeam.Location != "Wichita");
            ViewBag.JacobGray = _context.Teams.Include(a => a.AllPlayers).ThenInclude(b => b.PlayerOnTeam).Where(c => c.AllPlayers.Any(d => d.PlayerOnTeam.FirstName == "Jacob" && d.PlayerOnTeam.LastName == "Gray") && c.TeamName != "Colts" && c.Location != "Oregon");
            ViewBag.AFABJoshua = _context.Players.Include(a => a.AllTeams).ThenInclude(b => b.TeamOfPlayer).ThenInclude(c => c.CurrLeague).Where(a => a.AllTeams.Any(b => b.TeamOfPlayer.CurrLeague.Name.Contains("Atlantic Federation of Amateur")) && a.FirstName == "Joshua");
            ViewBag.TwelveOrMore = _context.Teams.Include(a => a.AllPlayers).Where(b => b.AllPlayers.Count() >= 12);
            ViewBag.AllPlayersSorted = _context.Players.Include(a => a.AllTeams).ThenInclude(c => c.TeamOfPlayer).OrderBy(b => b.AllTeams.Count());

            return View();
        }
    }
}