# Create React App Docker

Basic create-react-app application running on docker

#
## DEV ENVIRONMENT | Running on http://localhost:3000
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`

#
## BUILD FOR PRODUCTION | Running on http://localhost:80
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`

#
## Github repository
https://github.com/Antoine75-JS/CRA-docker

#
## Docker image
https://hub.docker.com/repository/docker/aintone/create-react-app-template