# amw-hangman-api

Hangman REST API using Nest.js

Deployed here: https://amw-hangman-api.herokuapp.com/

## Starting the database locally

    docker run --name pg-docker --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=hangman -d postgres

or

    docker-compose up -d

or simply

    ./startDb.sh

## Starting the REST API server locally

    . ./setEnvDevWorkstation.sh
    ./startApi.sh

## Local links

* http://localhost:3000 for the welcome page
* http://localhost:3000/api/ for the API documentation


## TODOs

* add Users and link each category with a user uuid
* whenever a category or associated text entry is created, modified or deleted, ensure the modifier is the category owner
* create TextDto for POST and PUT input validations
* create POST and PUT using TextDto for validations

## References - Security with Firebase

* https://www.youtube.com/watch?v=kX8by4eCyG4
* https://medium.com/@sharma.vikashkr/nestjs-firebase-auth-secured-nestjs-resource-server-9649bcebd0de
* https://console.firebase.google.com/project/nativefirebase2webview/settings/serviceaccounts/adminsdk

## References - Heroku

* https://www.joshmorony.com/deploying-a-production-nestjs-server-on-heroku/
* https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/


## References - Database

* https://typeorm.io/#/
* https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/

### Adding new categories (initialData)

- [Installing CLI](https://typeorm.io/using-cli#installing-cli)
  npm i -g typeorm
  npm install ts-node --save-dev
- [Creating a new migration](https://typeorm.io/migrations#creating-a-new-migration)

Since we just add new collections (so far) all the DB table can be droped and re-created:

  * typeorm migration:create src/migration/initialData
  * then add the new array into `generateInserts.js` script and prepare the loop
  * then execute it:  `node ./tools/generateInserts.js`
  * then copy paste results into the new file for instance `11111111111-initialData.ts`


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

## Deploy Heroku repo master branch

* npm install -g heroku
* heroku --version
* heroku login
  - see also https://dashboard.heroku.com/apps/amw-hangman-api/deploy/heroku-git
  - see also https://stackoverflow.com/a/70632778/704681
* ensure to stage new features into heroku repo here: /flutter-projects/heroku-repo/amw-hangman-api
* git commit -m"feat: my new features"
* git push heroku master


## License

Nest is [MIT licensed](LICENSE).
