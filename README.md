# Code Editor
A Code Editor aimed at assisting in education with an interactive programming experience

## How To Clone
Follow the instructions [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to setup an ssh key because github no longer allows username, password authentication.

## Things you should install depending on what project you are working on
* VsCode - Just good to have
* Visual Studio 2019 Community Edition, make sure you add the .NET Core Web Development package - For C# API
* NodeJs - For Frontend
* Golang & Docker - For the High Performance API

# Tech Details
?? - Denotes optional/to discuss when we get there
* - Optional

## Front End
* ReactJs NextJs
* React should be functional and use hooks, no class nonsense
* Jest for testing (Cyprus??)*
* Webpack & Babel for bundle and transpile
* Handles all the UI

## C# API 
* .NET Core
* MS SQL
* Redis
* Swagger for Documentation
* Unit/Integration Tests (Xunit??)
* Handles mainly simple CRUD API Calls for basic resources

## High Performance API
* Golang (Router?? Chai?? Gin??)
* Connects to the MS SQL and Redis Instance as well, maybe RabbitMQ?
* Testing and some sort of documentation
* Handles spawning docker workspaces from API calls, running the code and spitting back the stdout

## Other Things 
* Some sort of Wiki to document setup/build processes and overall architecture
* Swagger for endpoint documentation
* Some sort of way to track features and progress (Jira/Trello/etc.), maybe agile?
* Some sort of CI/CD Pipeline. One for running tests when merging branches, one for actually deploying code to the server in either a production or sandbox enviornment

# Minimum Viable Product (MVP)
* User Managmenet with Oauth (Google, Github)
* Ability to create a Course, Tutorials, and preview them (Only for HTML, CSS & JS For MVP), for admins only
* Ability to publish the course and tutorials for normal users to see
* Ability to take the course and work through it via a code editor with an output preview
* The output should be validated depending on what is specified by the tutorial, and should display to the user that their output is invalid
