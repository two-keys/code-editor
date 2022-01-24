using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace CodeEditorApi.Features.CodeCompiler.Compile
{
    public interface ICompileCommand
    {
        public Task<ActionResult<string>> ExecuteAsync(CompileBody compileBody);
    }

    public class CompileCommand : ICompileCommand
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public CompileCommand(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<ActionResult<string>> ExecuteAsync(CompileBody compileBody)
        {
            var httpClient = _httpClientFactory.CreateClient("GoApi");

            var response = await httpClient.PostAsync("/compile", new StringContent(JsonConvert.SerializeObject(compileBody), Encoding.UTF8, "application/json"));

            var result = response.Content.ReadAsStringAsync().Result;

            dynamic data = JsonConvert.DeserializeObject<dynamic>(result);

            return new OkObjectResult(data.output);
        }
    }
}
