#!/bin/sh

set -e

APP_NAME="node-ms-app"
PORT=8000

echo "Building Docker image..."
docker stop $APP_NAME || true
docker rm $APP_NAME || true
docker rmi $APP_NAME || true

docker build -t $APP_NAME .
docker run -d -p $PORT:$PORT --name $APP_NAME --env-file .env $APP_NAME

echo "$APP_NAME is running on port $PORT"
echo "Deploy script completed."