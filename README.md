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

### Adding new categories (initialData)

Since we just add new collections (so far) all the DB tables can be droped and re-created:

  * generate a new migration file: `typeorm migration:create src/migration/initialData`
  * add the new array into `generateInserts.js` script and prepare the loop
  * generate the SQL statements into `generated-data.txt` file:  `node ./tools/generateInserts.js`
  * then copy paste results into the new file for instance `11111111111-initialData.ts`


## Deploy Heroku repo master branch

* npm install -g heroku
* heroku --version
* heroku login -i
* execute `copyToHerokuStaging.sh`
* ensure to stage new features into heroku repo here: /flutter-projects/heroku-repo/amw-hangman-api
* git commit -m"feat: my new features"
* git push heroku master

## Nest.js & references

[Installation & Nest.js](docs/nestjs.md)
[References](docs/references.md)

## License

Nest is [MIT licensed](LICENSE).
