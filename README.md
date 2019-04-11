# Start

```
eval $(docker-machine env node-local)
docker build -t gatsby-web .
docker run -d -it --rm -v "$PWD/workspaces":/usr/src/app -p 80:8000  --name=web gatsby-web
bash -c "clear && docker exec -it web /bin/bash"
CHOKIDAR_USEPOLLING=1 gatsby develop --host 0.0.0.0
```