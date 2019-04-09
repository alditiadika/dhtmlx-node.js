import "app-module-path/register";
import "babel-polyfill";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import { DatabaseConnection as DB } from "./src/config";
import routes from "./src/routes";
DB.connect(err => {
  if (err !== null) process.exit();
  else {
    console.log("Database run at mongodb://localhost:27017/gantt_node");
    const client = express();
    const server = express();
    client.use(express.static(path.join(__dirname, "public")));
    client.use(bodyParser.urlencoded({ extended: true }));

    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    routes(server);

    client.listen(8080, () => console.log("Server run at localhost:8080"));
    server.listen(9090, () => console.log("Server REST run at localhost:9090"));
  }
});
