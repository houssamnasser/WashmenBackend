import http from "http";
import express from "express";
import createHttpError from "http-errors";
import config_data from "./config/config.development.json";

import apiRoutes from "./routes/partners.route";
import { Router } from "express";
const app = express();
const usersRouter = Router();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", apiRoutes);

//* Catch HTTP 404
app.use((req: any, res: any, next: any) => {
  next(createHttpError(404));
});

//* Error Handler
app.use(
  (
    err: { status: any; message: any },
    req: { body: any },
    res: any,
    next: any
  ) => {
    res.status(err.status || 500);
    res.json({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  }
);

//start the server
var port = process.env.PORT || config_data.port;

app.listen(port, () => {
  console.log("Running on port " + port);
});
