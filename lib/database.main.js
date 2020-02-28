const p = require("./loggerFactory")("Database");

const Datastore = require("nedb-promise");

// todo should pass in the process.env.dbFile
let db = {};
db.raw = new Datastore({
  filename: process.env.dbFile || "./nedb.db",
  autoload: true
});

db.action = async function(variable) {
  p.info(`running action: ${variable}`);

  const res = await db.raw.find(variable);
  return res;
};

module.exports = db;
