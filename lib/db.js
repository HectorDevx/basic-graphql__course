"use strict";
const { MongoClient } = require("mongodb");

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const mongoUrl = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}`;
let connection;

async function connectDB() {
  if (connection) return connection.db();

  let client;
  try {
    client = new MongoClient(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = await client.connect();
  } catch (error) {
    console.error("Error en db:" + mongoUrl + "ERROR:" + error);
    process.exit(1);
  }
  return connection.db();
}

module.exports = connectDB;
