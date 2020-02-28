const p = require("./lib/loggerFactory")("main.js");

const { Cottage } = require("cottage");
const bodyParser = require("koa-bodyparser");

const apiInstaller = require("./lib/api.js");

p.info("App Start");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3001;

// Create the webserver
var app = new Cottage();
app.use(bodyParser());

// This could probably be another Koa app that's mounted on /api. Would make more sense later.
app = apiInstaller(app, "/api"); // probably don't need to return it

p.info(`Server listening on ${host}:${port}`);
app.listen(port, host);
