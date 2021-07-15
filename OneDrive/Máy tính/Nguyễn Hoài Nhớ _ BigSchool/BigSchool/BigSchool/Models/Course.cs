using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BigSchool.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        [DisplayName("Địa Chỉ")]
        public string Place { get; set; }
        [DisplayName("Ngày Bắt Đầu")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        [DataType(DataType.Date)]
        public DateTime DateTime { get; set; }

        [DisplayName("Người Dạy")]
        public string LecturerId { get; set; }
        public ApplicationUser Lecturer { get; set; }


        [DisplayName("Tên Khóa Học")]
        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public IList<Attendance> Attendances { get; set; }
        public string LecturerName { get; internal set; }


        public bool isLogin = false;
        public bool isShowGoing = false;
        public bool isShowFollowing = false;

    }
}