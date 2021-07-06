module.exports = {
  reactStrictMode: true,
  target: "serverless",
  env: {
    USERSDB_API_KEY: process.env.USERSDB_API_KEY,
  }
}
