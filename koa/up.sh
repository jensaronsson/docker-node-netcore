#!/bin/sh

docker run -d -p 3000:3000 --link=unsplash-api:unsplash-api -v $(pwd):/app -w /app --name=koa koa

