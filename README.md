#The project is built using -> ReactJs (bootstrap) + DotNetCore MVC + SQL

#Requirements
- NPM package runner
- .NetCore Runtime + VS2017
- SQL server

#ProjectPlan
The project is scoped and planned in a Trello board here - https://trello.com/b/hGn3JRL7/contactus-app

#Repository
Code available here - https://github.com/kalyanteja/ContactUs

#Setup:
1. Database: 
	- Make sure you have sql server instance installed and have permissions to create databases.
	- Then run the script located here - {root}/Db/CreateSqlDbAndTable.sql
	- Please verify if you have "ContactUsApp" database and table "ContactUsMessage" in this db is created (this is crucial to insert ContactUs from data via API)
	
2. Install client packages:
	- Go to {root}\ContactUsApp\ClientApp folder and run "npm install" command via cmd (This install all required client packages)
	- To verify UI - run on cmd "npm start" in the same location as above and see app is running fine (This will spin up the app but the API is not up, hence breaks the contact-us form saving to tables feature)
	
3. Running application:
	- Once we verified database and client, open the project solution in Visual Studio 2017 (make sure project is built without issues for other versions) and build solution.
	- Make sure there are no errors
	- Now run the application by clicking by 
		1. right click on project -> debug -> Start new instance (or)
		2. Click on start on top using IIS Express option
	- This will serve up mvc application redirected to React code
	- API is hosted on {baseurl}/api/ContactUsMessage/{action}

#Features in application
1. Clock - Clicking on the text run a clock seamlessly
2. Weather - A feature to fetch weather details of a City using an open public API
3. ContactUS - This is a feedback form with UserName, Email & Message that user can submit and is saved into our SQL database (Web API is required to persist data to sql db).



