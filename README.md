# Endproject: Give & Get

## Table of contents:

- [Endproject: Give \& Get](#endproject-give--get)
  - [Table of contents:](#table-of-contents)
  - [Requirements:](#requirements)
  - [Getting started:](#getting-started)
  - [Set up a database:](#set-up-a-database)

## Requirements:

> **Note:** <br />
> In this setup we're explaining how to set up a database using [PostgreSQL](https://www.postgresql.org/). If you want to use another database you can find the documentation for that [here](https://www.prisma.io/docs/concepts/database-connectors).

- Windows (including WSL), macOS or Linux
- [Node.js](https://nodejs.org/en/) (version 14.6.0 or newer)
- [PostgreSQL](https://www.postgresql.org/)

## Getting started:

To get started with the project you need to first clone the repository onto your machine.

```bash
$ git clone git@bitlab.bit-academy.nl:a3425e22-7e10-11ea-944d-cec41367f4e7/533d8f3b-9d9a-4d97-9885-ae4601c773db/eindproject-giveget.git
```

After the repository has been cloned onto your device you will need to install all of the dependencies using the following command.

```bash
$ npm install
```

When all the dependencies are installed you will need to set up a `.env` file. In the root folder of the project you can find a `.env.example` file that you can copy and change to your own liking. When all of that is set up you can migrate your database (assuming you have already set one up, if not you can see how to do this in [the next section](#Set-up-a-database)).

```bash
$ npx prisma migrate dev
```

After the database has been migrated you can start the server using the following command.

```bash
$ npm run dev
```

## Set up a database:

First you will need to install PostgreSQL on your machine. You can find the installation instructions for your operating system [here](https://www.postgresql.org/download/). After you have installed and set up PostgreSQL on your machine you will need to access the CLI tool. You can do this by running the following command.

```bash
$ psql -U postgres
```

When you have access to the CLI tool you need to create a password for the `postgres` user. This is because Prisma can not connect to the database with a user that has no password. You can do this by running the following command.

```bash
$ \password postgres
```

When you have set a password for the `postgres` user you can create a database for the project. You can do this by running the following command.

```bash
$ CREATE DATABASE give_get;
```

To make sure that the database is set up correctly you can run the following command to list all databases. If the database is set up correctly you should see the `give_get` database in the list.

```bash
$ \l
```

The database should now be set up and you can continue with the [Getting started](#Getting-started) section.
