const p = require("./loggerFactory")("API");

const mount = require("koa-mount");
const Response = require("cottage").Response;
// const batchserver = require("axios").create(); // For making client requests from the server

const database = require("./database.main");

function apiInstaller(app) {
  p.info("Initiating the API hooks...");

  // Set up a logging middleware for /api
  async function logger(ctx, next) {
    p.info(`Caught request for: ${ctx.originalUrl} from ${ctx.ip}`);
    await next();
  }
  app.use(mount("/api", logger));

  app.post("/uri", async ctx => {
    return "thing";
  });

  app.get("/api/words/", async () => "api end point");

  p.info("API Hooks configured");
  return app;
}

module.exports = apiInstaller;
