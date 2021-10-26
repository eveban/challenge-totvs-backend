import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

class Database {
  constructor() {
    this.mongo();
    mongoose.set("debug", true);
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true,
      }
    );
  }
}

export default new Database();
