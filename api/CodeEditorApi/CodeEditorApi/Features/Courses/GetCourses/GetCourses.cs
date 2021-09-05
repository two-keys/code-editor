using CodeEditorApiDataAccess.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.Courses.GetCourses
{
    public class GetCourses
    {

        private readonly CodeEditorApiContext _context;

        public GetCourses(CodeEditorApiContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Course>> ExecuteAsync()
        {
            var courses = await _context.Courses.ToListAsync();

            return courses;
        }
    }
}
