require("dotenv").config()

module.exports = {
  reactStrictMode: true,
  target: "serverless",
  env: {
    USERSDB_API_KEY: process.env.USERSDB_API_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  }
}

