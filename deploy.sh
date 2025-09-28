#!/bin/bash
set -e

APP_NAME="node-ms-app"
PORT=8000

echo "Stopping old container (if any)..."
docker stop $APP_NAME || true
docker rm $APP_NAME || true
docker rmi $APP_NAME || true

echo "Building new image..."
docker build -t $APP_NAME .

echo "Starting new container..."
docker run -d --name $APP_NAME -p $PORT:3000 --env-file .env $APP_NAME

echo "✅ Deployment completed! App running on port $PORT"
