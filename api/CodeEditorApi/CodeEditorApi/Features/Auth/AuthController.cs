using CodeEditorApiDataAccess.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.Auth
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly CodeEditorApiContext _context;

        public AuthController(CodeEditorApiContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Queries for all users
        /// </summary>
        /// <returns>All users in the DB</returns>
        /// <response code="200">Returns the users from the DB</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            var users = await _context.Users.ToListAsync();

            return users;
        }
    }
}