using BigSchool.Models;
using Microsoft.AspNet.Identity;
using System.Linq;
using System.Web.Http;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace BigSchool.Controllers
{
    public class AttendancesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        [HttpPost]
        public IHttpActionResult Attend(Course attendanceDTO)
        {
            var userId = User.Identity.GetUserId();
            if (db.Attendances.Any(p => p.LecturerId == userId && p.CourseId == attendanceDTO.Id))
            {
                /* return BadRequest("Lịch đã tồn tại !");*/
                db.Attendances.Remove(db.Attendances.SingleOrDefault(p =>  p.LecturerId == userId && p.CourseId == attendanceDTO.Id));
                db.SaveChanges();
                return Ok("Cancle");
            }
            var att = new Attendance() { CourseId = attendanceDTO.Id, LecturerId = User.Identity.GetUserId() };
            db.Attendances.Add(att);
            db.SaveChanges();
            return Ok();
        }
    }
}
