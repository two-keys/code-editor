using CodeEditorApiDataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace CodeEditorApiDataAccess
{
    public class CodeEditorContext : DbContext
    {
        public CodeEditorContext(DbContextOptions<CodeEditorContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
