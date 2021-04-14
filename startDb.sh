echo stoping exising local DB (if any)
docker stop amw-hangman-api_database_1

echo starting local DB
docker-compose up -d
docker ps

echo local DB started you can now start the backend API webapp (startApi script)
