var pino = require("pino");
// var p = pino(
//   {
//     name: "app",
//     safe: true
//   },
//   pretty
// );

module.exports = function(instanceName) {
  return pino({
    name: instanceName,
    safe: true,
    prettyPrint: { colorize: true }
  });
};

// consider consola
