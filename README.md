# E-Commerce webapp

## Project overview

This web app is fullstack e-commerce website that backend section is supported using `express` server with `graphql` and `Apollo server` technologies and frontend is supported using `Next` framework. The project is written in `Typescript`.

In This project Owner of web app (<b>Admin</b>) is able to login with `AccessToken` and `RefreshToken` and create products or update them.

Buyers are able to create an account and login to it using unique email and password. `AccessToken` and `RefreshToken` created using `jwt` ease the login process. Buyers can edit their info or `Search` for a product or `filter` products base on <i>product categories</i>.

## Tech inUse

- Server

The backend server uses the following technologies:

```bash
Typescript,
Express,
mongoose,
Graphql
typeGraphql,
typegoose,
lodash,
jsonwebtoken,
cookie-parser,
Apollo-server,
...
```

- Client

The Frontend framework uses the following technologies:

```bash
Typescript,
Apollo-client,
Next,
tailwindCss,
...
```

## Getting Started

- Server

To run the backend server in development mode use the following comments:

```bash
yarn dev
or
npm dev
```

The server will be accessable on PORT `8080` at [http://localhost:8080](http://localhost:8080).

- Client

To run the frontend framework in development mode use the following comments:

```bash
yarn dev
or
npm dev
```

The frontend server will be accessable on PORT `3000` at [http://localhost:3000](http://localhost:3000).

## Status

under development.

## Deployment

..
