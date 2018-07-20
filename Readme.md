# Shelf Storage (Backend)

This is the backend of the project.
The front ends can be found at: https://github.com/bryankai/shelf-storage

*Shelf* is a community storage sharing platform that connects users with hosts to find affordable short-term storage in the community.  

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

What things you need to install the software and how to install them

```shell
* fork and clone this repository
* run npm install
```


### Installing

A step by step series of examples that tell you how to get a development env running to utilize the PostgreSQL database

Create the development database:

```shell
* createdb storage_share_dev
```

and run migrations and seeds:

```shell
* npm run latest
* npm run seed
```

Finally, start the server:

```shell
* npm start
```

Check that you can GET the `/spaces/5` endpoint.  If you receive a 200 message from the server you are up and running.  You should receive details about one of the spaces.

## Deployment

This backend server has been deployed on Heroku at the address:
http://shelf-storage-backend.herokuapp.com/


## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Node.js](https://nodejs.org/en/) - Package ecosystem
* [Express.js](https://expressjs.com/) - Node.js web application framework
* [Knex.js](https://knexjs.org/) - SQL query builder
* [PostgreSQL](https://www.postgresql.org/) - SQL database

## Contributing

Please send the developers a message for details on our code of conduct, and the process for submitting pull requests to us.


## Developers

**Bryan Kai** - *Initial work* - [github](https://github.com/bryankai) - [LinkedIn](https://www.linkedin.com/in/bryan-kai/)
