using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace DutchTreat.Controllers {
    public class AppController : Controller {
        private readonly IMailService _mailService;
        private readonly IDutchRepository _repository;

        public AppController(IMailService mailService, IDutchRepository repository) {
            _mailService = mailService;
            _repository = repository;
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

        public IActionResult Shop() {
            var results = _repository.GetAllProducts();
            return View(results);
        }
    }
}