using CodeEditorApiDataAccess.Models;

namespace CodeEditorApiDataAccess
{
    public static class DbInitializer
    {
        public static void Initialize(CodeEditorContext context)
        {
            context.Database.EnsureCreated();

            context.Users.Add(new User { Name = "Me" });

            context.SaveChanges();
        }
    }
}
