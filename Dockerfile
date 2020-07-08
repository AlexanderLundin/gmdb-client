# Stage 1
FROM node:12-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

EXPOSE 4200
CMD [ "npm", "run", "start"]
## Build docker image
    # $ docker build -t gmdb-ng-client .
    # if that fails, use the command, then try again
    # $ gradlew build
    #
## Push to dockerhub
    # $ docker login
    # $ docker tag gmdb-ng-client alundin/gmdb-ng-client
    # $ docker push alundin/gmdb-ng-client
    #
## Retrieve the image from docker hub
    # $ docker pull alundin/gmdb-ng-client
