/*
this file code by parag and yash 

*/
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import Mongoose from "mongoose";
import User from "./router/index.js";
import Gun from "gun";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.json({ limit: "4gb" }));
app.set("view engine", "pug");
app.use(
  express.static(__dirname + "/public", {
    dotfiles: "ignore",
    etag: false,
    extensions: ["htm", "html", "js", "css"],
    index: false,
    maxAge: "1d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    },
  })
);
app.set("views", path.join(__dirname, "views"));
app.use("/", User);
app.use(Gun.serve);

const server = app.listen(3000, () => {
  Mongoose.connect(process.env.MongoClient, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((e) => {
    // console.log(e);
    console.log(__dirname);
    console.log("server is runing http://localhost:3000/ 🔥🔥");
  });
});
var gun = Gun({
  web: server,
});
