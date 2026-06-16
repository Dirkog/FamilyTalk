const http = require("http");
const config = require("./config");
const { createApp } = require("./app");
const { createServices } = require("./services/ApplicationServices");
const attachWebSocket = require("./websocket");
const logger = require("./utils/Logger");

const services = createServices();
const app = createApp(services);
const server = http.createServer(app);
attachWebSocket(server, services);

server.listen(config.port, () => {
  logger.info({ port: config.port }, "Family Chat server started");
});
