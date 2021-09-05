using CodeEditorApiDataAccess.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.Courses.GetCourses
{
    public class GetCoursesCommand
    {

        private readonly GetCourses _getCourses;

        public GetCoursesCommand(GetCourses getCourses)
        {
            _getCourses = getCourses;
        }

        public async Task<IEnumerable<Course>> ExecuteAsync()
        {
            var courses =  await _getCourses.ExecuteAsync();

            // If we needed to manipulate the data, or do some data validation it would be here

            return courses;
        }
    }
}
