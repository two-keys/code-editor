using AutoFixture;
using CodeEditorApiDataAccess.Data;
using Microsoft.EntityFrameworkCore;

namespace CodeEditorApiIntegrationTests
{
    public class DbTest
    {
        private readonly DbContextOptions<CodeEditorApiContext> _options;
        protected readonly Fixture _fixture = new Fixture();

        public DbTest()
        {
            _options = new DbContextOptionsBuilder<CodeEditorApiContext>()
                .UseInMemoryDatabase(databaseName: "Test")
                .Options;
        }

        protected CodeEditorApiContext TestContext()
        {
            return new CodeEditorApiContext(_options);
        }
    }
}
