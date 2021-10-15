docker load -i code-editor-ui.tar
docker stop code-editor-ui
docker rm code-editor-ui
docker run -p 3000:3000 -d --restart unless-stopped  --name code-editor-ui code-editor-ui