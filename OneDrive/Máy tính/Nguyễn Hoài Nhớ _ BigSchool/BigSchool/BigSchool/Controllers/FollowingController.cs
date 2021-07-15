﻿using BigSchool.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BigSchool.Controllers
{

    public class FollowingController : ApiController
    {

        private ApplicationDbContext db = new ApplicationDbContext();
        [HttpPost]
        public IHttpActionResult Follow(Following follow)
        {
            //user login là người theo dõi, follow.FolloweeId là người được theo dõi
            var userID = User.Identity.GetUserId();
            if (userID == null)
                return BadRequest("Please login first!");
            if (userID == follow.FolloweeId)
                return Conflict();
            //kiểm tra xem mã userID đã được theo dõi chưa
            Following find = db.Followings.FirstOrDefault(p => p.FollowerId == userID && p.FolloweeId == follow.FolloweeId);
            if (find != null)
            {
                /*return BadRequest("The already following exists!");*/
                db.Followings.Remove(db.Followings.SingleOrDefault(p =>  p.FollowerId == userID && p.FolloweeId == follow.FolloweeId));
                db.SaveChanges();
                return Ok("cancel");
            }
            //set object follow
            follow.FollowerId = userID;
            db.Followings.Add(follow);
            db.SaveChanges();
            return Ok();
        }
    }
}
