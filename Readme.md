# Docker instructions

cd into unsplash

**Build image**

    docker build -t unsplash/olaison .

**run container**

    docker run -p 5000:5000 --name=unsplash-api unsplash/olaison


    cd into docker-koa
    run npm install
    
**build image**    

    docker build -t koa .

**run container**
    docker run -d -p 3000:3000 --link=unsplash-api:unsplash-api -v $(pwd):/app -w /app --name=koa koa

**browse to http://localhost:3000**

this will take make a request to dotcore api and return its payload
