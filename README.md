# amw-hangman-api

Hangman REST API using Nest.js

Deployed here: https://amw-hangman-api.herokuapp.com/

## Starting the database locally

    docker run --name pg-docker --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=hangman -d postgres
or
    docker-compose up -d
or
    ./startDb.sh

## Starting the REST API server locally

    . ./setEnvDevWorkstation.sh
    ./startApi.sh


## References - Heroku

* https://www.joshmorony.com/deploying-a-production-nestjs-server-on-heroku/
* https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/


## References Database

* https://typeorm.io/#/
* https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/




## Nest.js Overview

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
