using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace RegLog.Models
{
    public class LoginUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}