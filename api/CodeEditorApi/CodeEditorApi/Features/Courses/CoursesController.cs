using CodeEditorApi.Features.Courses.GetCourses;
using CodeEditorApiDataAccess.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.Courses
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IGetCoursesCommand _getCoursesCommand;

        public CoursesController(IGetCoursesCommand getCoursesCommand)
        {
            _getCoursesCommand = getCoursesCommand;
        }

        /// <summary>
        /// Get's all courses
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public async Task<IEnumerable<Course>> GetCourses()
        {
            return await _getCoursesCommand.ExecuteAsync();
        }
    }
}
