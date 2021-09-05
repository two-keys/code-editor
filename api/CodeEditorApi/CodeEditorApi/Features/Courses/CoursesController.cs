using CodeEditorApi.Features.Courses.GetCourses;
using CodeEditorApiDataAccess.Data;
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
        private readonly GetCoursesCommand _getCoursesCommand;

        public CoursesController(GetCoursesCommand getCoursesCommand)
        {
            _getCoursesCommand = getCoursesCommand;
        }

        /// <summary>
        /// Get's all courses
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IEnumerable<Course>> GetCourses()
        {
            return await _getCoursesCommand.ExecuteAsync();
        }
    }
}
