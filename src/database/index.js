import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

class Database {
  constructor() {
    this.mongo();
    mongoose.set("debug", true);
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: DB_USER,
        pass: DB_PASS,
      }
    );
  }
}

export default new Database();
