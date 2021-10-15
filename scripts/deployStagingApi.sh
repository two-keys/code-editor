# Deploy db
docker load -i code-editor-db.tar
docker run --rm --name code-editor-db --network="host" code-editor-db

# Deploy api
docker load -i code-editor-api.tar
docker stop code-editor-api
docker rm code-editor-api
docker run -p 8080:80 -d --restart unless-stopped --name code-editor-api --network="host" code-editor-api