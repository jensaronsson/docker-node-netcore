# Docker instructions
// Build image
docker build -t unsplash/olaison .

// run container

docker run -p 5000:5000 --name=unsplash-api unsplash/olaison

