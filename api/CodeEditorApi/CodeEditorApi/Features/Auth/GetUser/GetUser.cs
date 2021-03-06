using CodeEditorApiDataAccess.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.Auth.GetUser
{
    public interface IGetUser
    {
        Task<User> ExecuteAsync(string email);
    }

    public class GetUser : IGetUser
    {
        private readonly CodeEditorApiContext _context;

        public GetUser(CodeEditorApiContext context)
        {
            _context = context;
        }

        public async Task<User> ExecuteAsync(string email)
        {

            var user = await _context.Users
                .Where(x => x.Email == email)
                .FirstOrDefaultAsync();

            return user;
        }
    }
}
