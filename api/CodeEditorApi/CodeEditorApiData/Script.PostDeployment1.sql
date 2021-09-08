/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO Courses (Name) VALUES ('Course1');
INSERT INTO Courses (Name) VALUES ('Course2');
INSERT INTO Courses (Name) VALUES ('Course3');

INSERT INTO cfg_Roles (Role) VALUES ("Admin"), ("Teacher"), ("Student");
INSERT INTO cfg_difficulty_level (Difficulty) VALUES ("Easy"), ("Medium"), ("Hard");
INSERT INTO cfg_programming_languages (Language) VALUES ("CSS"), ("C#"), ("HTML"), ("Java"), ("JavaScript"), ("Python");

