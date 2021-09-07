CREATE TABLE [dbo].[User]
(
	[Id] INT IDENTITY(1,1) PRIMARY KEY,
	[Name] VARCHAR(100) NOT NULL, 
    [Email] VARCHAR(255) NOT NULL, 
    [RoleId] INT NOT NULL, 
    CONSTRAINT [FK_User_cfg_roles] FOREIGN KEY ([RoleId]) REFERENCES [cfg_roles]([Id])
)
