const { once } = require("events");
const http = require("http");

const DEFAULT_USER = {
  username: "cassio",
  password: 123,
};

const routes = {
  "/contact:get": (req, res) => {
    res.write("contact us page");
    return res.end();
  },

  // wrong login
  // curl -i -X POST --data '{"username": "cassio", "password": "23"}' localhost:3000/login
  // correct
  // curl -i -X POST --data '{"username": "cassio", "password": "123"}' localhost:3000/login

  "/login:post": async (req, res) => {
    const user = JSON.parse(await once(req, "data"));
    const toLower = (text) => text.toLowerCase();

    const namesAreEqual =
      toLower(user.username) === toLower(DEFAULT_USER.username);
    const passwordMatchs = user.password === DEFAULT_USER.password;

    if (!namesAreEqual || !passwordMatchs) {
      res.writeHead(401);
      res.write("Log in failed");
      res.end();
      return;
    }

    res.write("ok");
    return res.end();
  },
  default(req, res) {
    res.writeHead(404);
    return res.end("not found");
  },
};

function handler(req, res) {
  const { url, method } = req;
  const routeKey = `${url}:${method.toLowerCase()}`;

  const choosen = routes[routeKey] || routes.default;

  return choosen(req, res);
}

const PORT = 3000;

const app = http
  .createServer(handler)
  .listen(PORT, () => console.log(`running at ${PORT}`));

module.exports = app;
