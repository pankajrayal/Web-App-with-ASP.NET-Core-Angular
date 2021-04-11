using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DutchTreat.Controllers {
    public class AppController : Controller {
        private readonly IMailService _mailService;
        public AppController(IMailService mailService) {
            _mailService = mailService;
        }
        public IActionResult Index() {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact() {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model) {
            if (ModelState.IsValid){
                //save contact information on DB and send the email
                _mailService.SendMessage("prayal@abc.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail sent!!!";
                ModelState.Clear();
            }
            else {
                //Model has some issues. Show the errors.
            }
            return View();
        }

        public IActionResult About() {
            ViewBag.Title = "About Us";
            return View();
        }
    }
}