using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BigSchool.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace BigSchool.Controllers
{
    public class CoursesController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Courses
        public ActionResult Index()
        {
            var courses = db.Courses.Include(c => c.Category).Include(c => c.Lecturer);     
            return View(courses.ToList());
        }
        public ActionResult Following()
        {
            ApplicationUser currentUser = System.Web.HttpContext.Current
                                                    .GetOwinContext().GetUserManager<ApplicationUserManager>()
                                                    .FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            var listFollwee = db.Followings.Where(p => p.FollowerId == currentUser.Id).ToList();
            var list = db.Attendances.Where(p => p.LecturerId == currentUser.Id).ToList();
            var course = new List<Course>();
            foreach (Attendance att in list)
            {
                foreach(Following item in listFollwee)
                {
                    Course cou = db.Courses.FirstOrDefault(p => p.Id == att.CourseId); // fix bug for document
                    if (item.FolloweeId == cou.LecturerId)
                    {
                        Course obj = db.Courses.FirstOrDefault(p => p.Id == att.CourseId);
                        obj.Lecturer = db.Users.FirstOrDefault(p => p.Id == att.Course.LecturerId);
                        obj.Category = db.Categories.FirstOrDefault(p => p.Id == att.Course.CategoryId);
                        course.Add(obj);
                    }
                }
                
            }
            return View(course);
        }
        public ActionResult Attendance()
        {
            ApplicationUser userCurrent = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>()
                .FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            var list = db.Attendances.Where(p => p.LecturerId == userCurrent.Id).ToList();
            var course = new List<Course>();
            foreach (Attendance att in list)
            {
                Course obj = db.Courses.FirstOrDefault(p => p.Id == att.CourseId);
                obj.Lecturer = db.Users.FirstOrDefault(p => p.Id == att.Course.LecturerId);
                obj.Category = db.Categories.FirstOrDefault(p => p.Id == att.Course.CategoryId);
                course.Add(obj);
            }
            return View(course);
        }
        public ActionResult Mine()
        {
            ApplicationUser userCurrent = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>()
                .FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            var courses = db.Courses.Where(p => p.LecturerId == userCurrent.Id && p.DateTime > DateTime.Now).ToList();
            foreach (Course item in courses)
            {
                item.LecturerName = userCurrent.Name;
                item.Category = db.Categories.FirstOrDefault(p => p.Id == item.CategoryId);
            }
                return View(courses);

        }

        public ActionResult Home()
        {
            var courses = db.Courses.Include(c => c.Category).Include(c => c.Lecturer).Where(p => p.DateTime > DateTime.Now);
            //lấy user login hiện tại
            var userID = User.Identity.GetUserId();
            foreach (Course i in courses)
            {
                //Lấy Name và Gán
                ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext()
                    .GetUserManager<ApplicationUserManager>()
                    .FindById(i.LecturerId);
                i.LecturerName = user.Name;
                //Lấy Danh Sách User Tham gia khóa học
                if (userID != null)
                {
                    i.isLogin = true;

                    //Kiểm tra tình trạng tham gia của User
                    Attendance isAtt = db.Attendances.FirstOrDefault(p => p.CourseId == i.Id && p.LecturerId == userID);
                    if (isAtt != null) { i.isShowGoing = true; }

                    //Kiểm tra tình trạng Follow của User
                    Following isFl = db.Followings.FirstOrDefault(p => p.FollowerId == userID && p.FolloweeId == i.LecturerId);
                    if (isFl != null) { i.isShowFollowing = true; }
                }
            }
            return View(courses.ToList());
        }
        // GET: Courses/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Course course = db.Courses.Find(id);
            if (course == null)
            {
                return HttpNotFound();
            }
            return View(course);
        }

        // GET: Courses/Create
        public ActionResult Create()
        {
            ViewBag.CategoryId = new SelectList(db.Categories, "Id", "Name");
            ViewBag.LecturerId = new SelectList(db.Users, "Id", "Name");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Place,DateTime,CategoryId")] Course course)
        {
            ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>()
                .FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
            if (course != null)
            {
                course.LecturerId = user.Id;
                db.Courses.Add(course);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            /*ViewBag.CategoryId = new SelectList(db.Categories, "Id", "Name", course.CategoryId);
            ViewBag.LecturerId = new SelectList(db.Users, "Id", "Name", course.LecturerId);*/
            return View(course);
        }

        // GET: Courses/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Course course = db.Courses.Find(id);
            if (course == null)
            {
                return HttpNotFound();
            }
            ViewBag.CategoryId = new SelectList(db.Categories, "Id", "Name", course.CategoryId);
            ViewBag.LecturerId = new SelectList(db.Users, "Id", "Name", course.LecturerId);
            return View(course);
        }

        // POST: Courses/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Place,DateTime,LecturerId,CategoryId")] Course course)
        {
            if (ModelState.IsValid)
            {
                db.Entry(course).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoryId = new SelectList(db.Categories, "Id", "Name", course.CategoryId);
            ViewBag.LecturerId = new SelectList(db.Users, "Id", "Name", course.LecturerId);
            return View(course);
        }

        // GET: Courses/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Course course = db.Courses.Find(id);
            if (course == null)
            {
                return HttpNotFound();
            }
            return View(course);
        }

        // POST: Courses/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Course course = db.Courses.Find(id);
            db.Courses.Remove(course);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
