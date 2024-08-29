# Plug n API
Overview
Plug n API is a powerful and flexible API designed to make it easy for developers to integrate various services into their applications. Built on the popular Express.js framework, this API offers a simple, yet robust solution for creating and managing web services.

# Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v12.x or later)

npm (Node Package Manager)

Postman

# Nextech Credentials
Step 1: Contact Nextech to obtain the following:
ApplicationID
GroupID
Username
Password

Step 2: Sign in to Azure portal: http://portal.azure.com/ using the username and the temporary password Nextech has given. Change the password through the given link.

Step 3: Set up the API using the instructions from this documentation: https://nextechsystems.github.io/selectapidocspub/#getting-started

Note: nx-practice-id is the same as the GroupID, and clientID is the same as ApplicationID

Step 4: Request Access Token on Postman using these instructions: https://nextechsystems.github.io/selectapidocspub/#authentication

# Installation and Setup
Follow these steps to install and set up the Plug n API:

Step 1: Create a New Directory
First, create a new directory for your project and navigate into it:

mkdir plugnapi

cd plugnapi

Step 2: Initialize the Project
Initialize your project as an npm package. This will create a package.json file:

npm init -y

Step 3: Install Express.js
Install Express.js, the framework used to build this API:

npm install express

Step 4: Install Nodemon, ejs, and, axios
For development purposes, you can install Nodemon to automatically restart your server when file changes are detected:

npm install nodemon ejs axios

Step 5: Change the following: 
a. nx_practice_id on index.js, appointment.js, 
b. the client_id, username, password on authenticate.js
c. the credentials on localData.json using the credentials obtained from Postman (Request Access Token)

Step 5: Run the Application
To run your application in development mode with Nodemon, use:

npm run start:dev

For production, simply use:

npm start

Step 6: Test the API
Open your browser and navigate to:

http://localhost:3000




