<p align="center">
  <a href="https://www.penbeh.com/" target="blank"><h1>Creator : Mazdak</h1></a>
</p>
<p align="center">
  nazemi.works@gmail.com
</p>

## Description

this is my boilerplate powered by [Nest](https://github.com/nestjs/nest) and also can use it with spa and ssr application.

##### for ssr with nextjs or nuxtjs :

create server directory in root of your app
copy dependencies and devDep into package.json of next or nuxt.
copy src, test , config into server directory.
(other files must provide in root of your app - next or nuxt)
npm install

##### for spa with cra or vite or vue-cli :

come soon , already written , must add it to project for refer.
be patience.

## and also offer you :

##### MongoDB-Mongoose

##### Cookie-session

##### Clean-Architecture

##### Heavy Decoupling

---

### Installation

if you have locally installed mongodb go next step otherwise

use docker for create mongodb

command :

```bash
// that will create a container with db name in background.
// also check .env file or if you use docker-compose put env you need.


$ sudo docker run --name db -p 27017:27017 -d mongo


```

after that :

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
