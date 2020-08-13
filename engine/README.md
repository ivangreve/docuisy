# PoliciesApi

## Pre-Requisites

- Install [NodeJS](https://nodejs.org/es/)
- Version - (at least).

### Start API ✔

1. Install external packages.

- In the root folder, run the following command. - `$ npm install`.

2. Run server.

- In the root folder, run the following command. - `$ npm start`

3. **_PoliciesApi_** is ready!

### **Run Tests** ⚙

1. Make sure that the **API** isn't running
2. In the root folder, run the following commands.
   - `$ npm test`.

## Documentation 📄

All the API documentation was created with the standart [OpenAPI](https://swagger.io/specification/).

### SwaggerUI Documentation

1. Start **API**
2. Go to `http://localhost:4000/api-docs`

### How I get a Token? 🔑

1. Use `/authenticate` service:
   - `http://localhost:4000/api/auth/authenticate`
   - Add Request body:

```json
{
  "email": "evangelineblankenship@quotezart.com"
}
```

_NOTE: I used only the email field to authenticate the user_

## Used Technologies/Tools

- [NodeJS](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Express JSON Web Tokens](https://github.com/auth0/express-jwt#readme)
- [Jest](https://jestjs.io/)
- OpenAPI
- [SwaggerUI](https://swagger.io/specification/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
