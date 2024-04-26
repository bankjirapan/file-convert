import express from "express";
import path from "path";
import session from "express-session";
import bodyParser from "body-parser";

// Route
import routes from "../routes/routes";
import config from './config'

const app = express();

const createApp = {
  setup: function () {
    app.use(
      session({
        saveUninitialized: true,
        cookie: {
          maxAge: config.COOKIE_MAX_TIME,
        },
        resave: true,
        secret: config.COOKIE_SECREAT,
      })
    );

    // View
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("view engine", "pug");
    app.set("views", "src/views");
    app.use(express.static(path.join(__dirname, "../public")));
    app.use(routes);
    app.listen(config.APP_PORT, () => {
      console.log("App started at port " + config.APP_PORT);
    });
  },
};

export default createApp;
