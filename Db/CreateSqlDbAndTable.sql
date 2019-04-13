CREATE DATABASE [ContactUsApp]

GO

USE [ContactUsAppDb]
GO

/****** Object:  Table [dbo].[ContactUsMessage]    Script Date: 14/04/2019 1:43:07 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[ContactUsMessage](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](100) NOT NULL,
	[Email] [varchar](255) NOT NULL,
	[Message] [varchar](500) NULL,
	[SubmittedOn] [datetime] NULL DEFAULT (getdate()),
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [ContactUsAppDb]
GO
INSERT INTO ContactUsMessage (UserName, Email, Message)
VALUES ('Lars','Monsen@g.com', 'This works just fine');


