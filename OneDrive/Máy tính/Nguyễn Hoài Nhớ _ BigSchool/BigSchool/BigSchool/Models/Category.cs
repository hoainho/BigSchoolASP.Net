using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BigSchool.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [DisplayName("Tên Khóa Học")]
        public string Name { get; set; }

        public ICollection<Course> Courses { get; set; }
    }
}