# Code Editor (Code Buddy?)
A Code Editor aimed at assisting in education with an interactive programming experience

## How To Clone
Follow the instructions [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to setup an ssh key because github no longer allows username, password authentication.

## Things you should install depending on what project you are working on
* VsCode - Just good to have
* Visual Studio 2019 Community Edition, make sure you add the .NET Core Web Development package - For C# API
* NodeJs - For Frontend
* Golang & Docker - For the High Performance API

## Front End
* ReactJs (Typescript????)
* Storybook??
* Jest for testing (Cyprus??)
* Webpack & Babel for bundle and transpile
* Handles all the UI

## C# API 
* .NET Core
* MS SQL
* Redis
* RabbitMQ??
* Handles mainly simple CRUD API Calls for basic resources

## High Performance API
* Golang (Router? Chai? Gin?)
* Connects to the MS SQL and Redis Instance as well, maybe RabbitMQ?
* Just handles spawning docker workspaces from API calls, running the code and spitting back the stdout
