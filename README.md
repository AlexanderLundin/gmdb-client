# GMDB Client

This project contains an Angular client to front the GMDB microservices API.

* Service API: 
* Documentation:

**Features**

- Search movie database
- Create account
- Leave reviews
- Leave comments

## Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

**Docker Instructions**

1. Ensure gmdb-bridge network is created `docker network inspect gmdb-bridge`
1. Ensure gmdb-gateway is running on gmdb-bridge network `docker network inspect gmdb-gateway` look for gmdb-bridge network
1. Build the docker image `docker build -t gmdb/ui`
1. Run the image `docker run -d -p 4200:4200 --name gmdb-ui --network gmdb-bridge gmdb/ui`

> NOTE: To change docker port, you must change it in `Dockerfile` and `server.js`.  To change local port, change just the first port number.

**Node Instructions**
1. Download or clone this repo.
2. Inside the gmdb-ui folder, run: `npm install`
3. Run the server: `ng serve -o` or `npm run start`


## Deployment

1. Run: `ng build --prod`
2. Upload the `dist/gmdb-ui/` folder to your server


## DEVELOPMENT TODOs

- [x] Navigation
- [x] Search bar
- [x] Login form
- [x] Movie list
- [x] Movie detail
- [x] Comment form
- [ ] Movie service
- [ ] Search service
- [ ] Comment service
- [ ] Promo/Landing page service
