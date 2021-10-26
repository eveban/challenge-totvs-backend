import mongoose from "mongoose";

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

class Database {
  constructor() {
    this.mongo();
    mongoose.set("debug", true);
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      // `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      'mongodb://localhost:27017/finance',
      {
        useNewUrlParser: true,
      }
    );
  }
}

export default new Database();
