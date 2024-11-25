import {
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.js"),
  route("about", "./about.js"),

  layout("./auth/layout.js", [
    route("login", "./auth/login.js"),
    route("register", "./auth/register.js"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.js"),
    route(":city", "./concerts/city.js"),
    route("trending", "./concerts/trending.js"),
  ]),
];
