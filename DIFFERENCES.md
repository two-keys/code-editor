## Code First
* Code up a model in C#
* That model now exists in EF and the database
* If you want to change the model you have to make a migration via cli
* And then update the db via cli

## Database First
* Create the model in SQL
* Publish it so the table exists in the DB
* Run dotnet CLI to reverse engineer and create/update the models in EF
* If a model changes you only need to publish and run the command instead of worrying about migrations.


