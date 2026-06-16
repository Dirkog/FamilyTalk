const express = require("express");
const upload = require("../middleware/FileUploadMiddleware");

function fileRoutes(services, auth) {
  const router = express.Router();
  router.post("/", auth, upload.single("file"), (req, res) => {
    res.status(201).json({ file: services.fileService.registerUpload({ ownerId: req.user.id, chatId: req.body.chatId, file: req.file }) });
  });
  router.post("/:fileId/downloaded", auth, async (req, res) => {
    res.json({ deletedTemporaryServerCopy: await services.fileCleanupService.markDownloaded(req.params.fileId) });
  });
  return router;
}

module.exports = fileRoutes;
