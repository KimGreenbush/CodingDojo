using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Dojodachi.Models
{
    public class Dachi
    {
        public int Fullness { get; set;}

        public int Happiness { get; set;}

        public int Meals { get; set;}

        public int Energy { get; set;}
    }
}