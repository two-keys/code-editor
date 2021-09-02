using System;
using Xunit;
using Moq;
using AutoFixture;

namespace CodeEditorApiUnitTests
{
    public class UnitTest1
    {
        Fixture fixture = new Fixture();

        [Fact]
        public void Test1()
        {
            var someString = fixture.Create<string>();

            Assert.Equal(someString, someString);
        }
    }
}
