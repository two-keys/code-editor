cd CodeEditorApi/CodeEditorApi
start /B /WAIT dotnet ef dbcontext scaffold Name=ConnectionStrings:DefaultConnection Microsoft.EntityFrameworkCore.SqlServer --output-dir ..\CodeEditorApiDataAccess\Data --namespace CodeEditorApiDataAccess.Data --force
pause