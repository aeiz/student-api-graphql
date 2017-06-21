module.exports = {
  // Point to your school's StudentAPI endpoint
  API_BASE_URL: process.env.API_BASE_URL
    ? process.env.API_BASE_URL
    : "https://api.university.edu/StudentApi/api",
  // GraphQL Server Protocol (http or https)
  SERVER_PROTOCOL: "http",
  // GraphQL Server Address
  SERVER_ADDRESS: "localhost",
  // GraphQL Server Port Number
  SERVER_PORT: 3000,
  // JSON Web Token Secret
  JWT_SECRET: "shhhhh!",
  // JSON Web Token Expiration Duration (in minutes)
  JWT_EXPIRE: 60
};
