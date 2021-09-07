CREATE TABLE [dbo].[Tutorial]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Title] VARCHAR(100) NULL, 
    [Author] INT NOT NULL, 
    [CourseId] INT NULL, 
    [Prompt] TEXT NULL, 
    [CreateDate] DATETIME NOT NULL, 
    [ModifyDate] NCHAR(10) NOT NULL, 
    [IsPublished] BIT NOT NULL
)
