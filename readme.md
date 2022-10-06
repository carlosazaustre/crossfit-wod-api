# **Crossfit Wod Api**

## How to run the app with docker:

> For running the app using docker you might have installed docker on your system. If you have not it <a href="https://docs.docker.com/engine/install/">Click Here</a>. After it, you should run this commands to start the container: 

```bash

#Create the image with node
docker build . -t crossfit-wod-api-node

#Starts the container with the API image
docker run -p 3000:3000 -d crossfit-wod-api-node

#After that the app runs on the port 3000. To check it: 
docker ps #Copy the container id

docker logs <container-id>

```