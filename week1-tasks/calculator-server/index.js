import express from "express";
import "dotenv/config";
import connect from "./connect.js";
import cors from "cors";
const app = express();

app.use(cors());
const PORT = process.env.PORT || 8000;

app.listen(PORT, callback);

function callback(err) {
  if (err) throw err;
  console.log(`App is listening to the port ${PORT}`);
  connect();
}

app.listen();
