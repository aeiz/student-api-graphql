# student-api-graphql
A [GraphQL](http://graphql.org/) Wrapper for [Ellucian](http://www.ellucian.com/)'s Banner Student REST API

This project's purpose is to aggregate all of the StudentAPI endpoints into a single GraphQL endpoint with intuitive types that are connected via the proper relationships. Using GraphQL to expose the StudentAPI endpoints offers many benefits, however considering it is just a wrapper, many of the limitations of the REST implementation remain.

### Disclaimer
This project is a work in progress! This is also just a user-contributed project. I am not affiliated with Ellucian.

## Install
<pre>
git clone https://github.com/aeiz/student-api-graphql.git
cd student-api-graphql
npm install
</pre>

## Configuration
Edit [config.js](https://github.com/aeiz/student-api-graphql/blob/master/config.js) with your own settings.

Config Option   | Description                                     | Default
--------------- | ----------------------------------------------- | -----------------------------------------
API_BASE_URL    | Point to your school's StudentAPI endpoint      | https://api.university.edu/StudentApi/api
SERVER_PROTOCOL | GraphQL Server Protocol (http or https)         | http
SERVER_ADDRESS  | GraphQL Server Address                          | localhost
SERVER_PORT     | GraphQL Server Port Number                      | 3000
CRYPTO_ALGO     | Crypto Algorithm                                | aes-256-ctr
JWT_SECRET      | JSON Web Token Secret                           | shhhhh!
JWT_EXPIRE      | JSON Web Token Expiration Duration (in minutes) | 60

## Running the GraphQL Server
<pre>
npm start
</pre>

Once the server is started, browse to http://localhost:3000/graphql to use [GraphiQL](https://github.com/graphql/graphiql) (A graphical interactive in-browser GraphQL IDE).

## Authentication
This project relies on the authentication mechanism implemented in the StudentAPI (basic HTTP authentication) application.  However, I've exposed a mutation ([createAuthenticationToken](https://github.com/aeiz/student-api-graphql/blob/master/schema/mutations/AuthenticationMutation.js)) that enables authentication through JWTs ([JSON Web Tokens](https://jwt.io/)).  Either can be used.

If you want to use JWTs, here's an example of the GraphQL mutation you would use to retrieve the token:
<pre>
mutation {
  createAuthenticationToken(username: "username", password:"password") {
    token
    expires
  }
}
</pre>

## Schema
The schema is generated programmatically, but you can view the [schema language](http://graphql.org/learn/schema/) description by browsing to http://localhost:3000/schema when the server is running.  The schema language description is also saved in [schema.graphql](https://github.com/aeiz/student-api-graphql/blob/master/schema.graphql).

A graph diagram of the schema definition generated by [graphqlviz](https://github.com/sheerun/graphqlviz) is available [here](https://github.com/aeiz/student-api-graphql/blob/master/student-api-graph.png).

You can also view the schema interactively using the [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) tool [here](https://aeiz.github.io/student-api-graphql/voyager.html).

Documentation of the schema generated via [graphql-docs](https://www.npmjs.com/package/graphql-docs) is available [here](https://aeiz.github.io/student-api-graphql/documentation.html).

Here's an example query:
<pre>
query {
  personIdentification(bannerId: "bannerId") {
    person {
      names {
        fullName
        firstName
        middleName
        lastName
      }
      dateOfBirth
    }
  }
}
</pre>


## Debug
This project uses [debug](https://www.npmjs.com/package/debug), which can be enabled by setting the DEBUG environment variable.

Windows:
<pre>
set DEBUG=*,-babel,-express*
</pre>
Linux/Mac:
<pre>
DEBUG=*,-babel,-express*
</pre>
