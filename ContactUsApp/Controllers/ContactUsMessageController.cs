using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContactUsMessageApp.Models;
using ContactUsApp.Models;

namespace ChinookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsMessageController : Controller
    {
        private readonly ContactUsAppContext _context;

        public ContactUsMessageController(ContactUsAppContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<ContactUsMessage> ContactUsMessages()
        {
            var messages = _context.ContactUsMessage.ToList();
            return messages;
        }

        [HttpPost]
        [Route("SendContactUsMessage")]
        public async Task<IActionResult> SendContactUsMessage([FromBody] ContactUsMessage ContactUsMessage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ContactUsMessage.Add(ContactUsMessage);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                throw;
            }

            return CreatedAtAction("GetContactUsMessage", new { id = ContactUsMessage.Email }, ContactUsMessage);
        }
    }
}