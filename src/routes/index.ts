import * as express from "express";
import distanceRoute from "./partners.route";

export const defaultRoutes = [
  {
    path: "/GetDistance",
    route: distanceRoute,
  },
];

let router = express.Router();

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
