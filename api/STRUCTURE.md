## CodeEditorApi
* This project holds the actual API, controllers, business logic
* Features/"SomeFeature" - creates sepperation between what each feature needs, ideally these slices don't interact with eachother, but they will need to at some point, when that happens there will probably be a "shared" folder at the same level of features
* Structure of a feature:
  * "FeatureController.cs" - This is the main controller and holds all the actual API Routes, but should not have any logic, as that would be harder to test.
  * "GetResource/" - This should be a folder that holds all the logic needed for a route.
    * "Validation/" - This should hold any classes related to validation
    * "GetResourceCommand.cs" - This will hold any logic the route needs to do, besides calling apon the database.
    * "GetResource.cs" - This will handle all the database related operations
* The basic flow will work like this
  1. Create route in controller, create a folder named "(Get/Post/Update)Resource/"
  2. Then create the "XXXResourceCommand.cs"
  3. Then add that to the ControllerConstructor to get DI to inject it, call the XXXResourceCommand.Execute()
  4. In XXXResourceCommand, do any logic not related to the database
  5. Then create XXXResrouce.cs, add it to the command contructor for DI and call XXXResource.Execute()
  6. In XXXResource do any database related operations and return it to the XXXResourceCommand for actual manipulation.
* Now you may think WHY??? Well this segregates our code into 3 parts.
  1. The actual controller, which will hold no logic, so doesn't need to be tested
  2. The Command, which will hold all business logic, but no database operations, so it can be easily unit tested.
  3. The "Retriever", which will do any database calls, which will allow it to be easily integration tested.
* Again this is all tentative, so feel free to give feedback.

## CodeEditorApiData
* This holds all the SQL tables, procedures, etc.
* Folder structure here doesn't really matter I would probably put all tables in a /tables folder though.
* We will probably need seed data/migration data later so that would probably go in /migrations or /seed
* To update the database execute the publish script, by double clicking on it in visual studio.

## CodeEditorApiDataAccess
* This holds all the EF models, which we reverse engineer via the scaffold.bat script.
* The reason this is in another project is we want to share this between CodeEditorApi and CodeEditorApiIntegrationTests.
* The structure for this is pretty much Data/ holds everything.

## CodeEditorApiUnitTests
* This holds all the unit tests, as mentioned previously, all commands/validation code should be unit tested, no database code.
* The structure here should realistically mimic CodeEditorApi, except slightly less granular
* So /Features/"MyFeature"/
  * XXXResourceCommandTest.cs
  * XXXValidationTest.cs

## CodeEditorApiIntegrationTests
* TODO: Create the actual project
* This project will hold all integration tests, and will be testing the "Retriever" classes
* The file structure should mimic the UnitTests
* So /Features/"MyFeature"/
  * GetResourceTest.cs
  * UpdateResourceTest.cs
