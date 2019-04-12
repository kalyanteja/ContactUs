
 CREATE TABLE ContactUsMessage (
    Id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    UserName varchar(100) NOT NULL,
    Email varchar(255) NOT NULL,
    Message varchar(500),
	SubmittedOn datetime DEFAULT(getdate()),
);


INSERT INTO ContactUsMessage (UserName, Email, Message)
VALUES ('Lars','Monsen@g.com', 'This works just fine');