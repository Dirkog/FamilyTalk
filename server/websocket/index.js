const { WebSocketServer } = require("ws");
const ChatHandler = require("./ChatHandler");
const TypingHandler = require("./TypingHandler");
const DeliveryHandler = require("./DeliveryHandler");
const StatusHandler = require("./StatusHandler");
const ReactionHandler = require("./ReactionHandler");
const GroupHandler = require("./GroupHandler");
const CallHandler = require("./CallHandler");
const NotificationHandler = require("./NotificationHandler");
const P2PSignaling = require("./P2PSignaling");

function attachWebSocket(server, services) {
  const wss = new WebSocketServer({ server });
  const handlers = {
    chat: new ChatHandler(services),
    typing: new TypingHandler(services),
    delivery: new DeliveryHandler(services),
    status: new StatusHandler(services),
    reaction: new ReactionHandler(services),
    group: new GroupHandler(services),
    call: new CallHandler(services),
    notification: new NotificationHandler(services),
    p2p: new P2PSignaling(services)
  };
  wss.on("connection", (socket) => {
    socket.on("message", (raw) => {
      const message = JSON.parse(raw.toString());
      const handler = handlers[message.type];
      if (handler) handler.handle(socket, message.payload || {});
    });
  });
  return wss;
}

module.exports = attachWebSocket;
