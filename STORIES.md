# Story Plan

## User OAuth Authentication
1. Create login/register ui page
2. Setup Google Oauth via Google Developer Console
3. Setup Github Oauth
4. Send Oauth Token to Api
5. Setup API Route that get's called by Oauth Provider
6. When route is called, store information needed from Oauth

## Create Database tables
1. Create the user Table
2. Create the course Table
3. Create the tutorial Table


## Create /courses Api 
1. Create a post route that takes a CreateCourseData model and validate the data.
2. Create a get route for all courses, it should return a list of Courses
3. Create a patch route to update courses, it should have UpdateCourseData model and validate the data
4. Create a delete route for courses, it should return 201 No Content


