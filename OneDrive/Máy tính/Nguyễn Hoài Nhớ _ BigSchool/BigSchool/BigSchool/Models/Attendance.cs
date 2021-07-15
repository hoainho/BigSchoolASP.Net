using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BigSchool.Models
{
    public class Attendance
    {
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public string LecturerId { get; set; }
        public ApplicationUser Lecturer { get; set; }

      
    }
}