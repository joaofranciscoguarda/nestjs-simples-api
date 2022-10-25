# Small CRUD NestJs Project

This app is a NestJs application with users, register, login, jwt token, route protection and submission related to the user who created it.

# Requirements

```
yarn install
```

### .Env

Make sure to fill the empty spaces in the .env.example in a .env file


## To Run it

Make sure to have docker installed and configured to run:

```
yarn db:dev:start
```

### Postgres

If you are running locally, create the same database locally as you named it in the .env file and run:

```
yarn prisma migrate dev && yarn start
```

## Docs

To access the docs while running: http://localhost:8000/api/docs/#/

