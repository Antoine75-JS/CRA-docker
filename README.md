# Create React App Docker

Basic create-react-app application running on docker

#
## DEV ENVIRONMENT | Running on http://localhost:3000
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

#
## BUILD FOR PRODUCTION | Running on http://localhost:80
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```


#
## Github repository
https://github.com/Antoine75-JS/CRA-docker

#
## Docker image
https://hub.docker.com/repository/docker/aintone/create-react-app-template

#
## CREATING DOCKER IMAGE FROM LOCAL REPOSITORY TO PULL ON PRODUCTION SERVER
> In your local directory 

```
- docker login
- docker image tag current-container-name docker-username/dockerhub-repository-name
- docker push docker-username/dockerhub-repository-name
```

> Add your image to your docker-compose.prod.yml | **CAREFUL WITH INDENTATION**
```
react-service-name:
  build:
    dockerfile: Dockerfile.prod
  # If image exists on docker-hob, allows docker-compose build from image
  image: docker-username/dockerhub-repository-name
```

> **- Updating and pushing service to docker-hub after local changes || (BUILD-SERVICE-ONLY)**
> - Build an image from the given image name in our docker-compose.prod.yml
```
docker-compose -f docker-compose -f docker-compose.prod.yml build (react-service-name)
```
> - Push newly create image to docker-hub
```
docker-compose -f docker-compose -f docker-compose.prod.yml push (react-service-name)
```

> **- In your production server**
> - Pull latest image
```
docker-compose -f docker-compose -f docker-compose.prod.yml pull
```
> - Run new image
```
docker-compose -f docker-compose -f docker-compose.prod.yml up -d (--no-deps service-name)
```