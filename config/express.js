import express from "express";
import path from "path";
import session from 'express-session'
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";

// Route
import routes from "../routes/routes";

const app = express();

const createApp = {
  setup: function () {

    app.use(session({ 
        saveUninitialized: true,
        cookie: {
          maxAge: 1800000
        },
        resave: true,
        secret: 'keyboard cat'
      }))

    // View
    app.use(bodyParser.urlencoded({ extended: true}))
    app.set("view engine", "pug");
    app.set("views", "views");
    app.use(express.static(path.join(__dirname, "../public")));

    app.use(routes);


    app.listen(8005, () => {
      console.log("App started at port 8005");
    });
  },
};

export default createApp;
