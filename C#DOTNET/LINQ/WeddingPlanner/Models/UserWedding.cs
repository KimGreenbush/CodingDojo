using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class UserWedding
    {
        [Key]
        public int UserWeddingId { get; set; }

        public int UserId { get; set; }
        public User Guest {get;set;}

        public int WeddingId { get; set; }
        public Wedding AttendingWedding {get;set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}