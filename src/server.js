import "dotenv/config";
import express from "express";

import cors from 'cors';
import routes from "./routes";
import "./database";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started in port 3332");
});
