const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  distDir: "nextjs",
  env: {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  },
  experimental: {
    sprFlushToDisk: false,
  },
  plugins: [new Dotenv()],
};
