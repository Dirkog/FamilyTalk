const JWTManager = require("../auth/JWTManager");
const SessionManager = require("../auth/SessionManager");
const RegisterService = require("../auth/RegisterService");
const LoginService = require("../auth/LoginService");
const PasswordReset = require("../auth/PasswordReset");
const MessageService = require("./MessageService");
const GroupService = require("./GroupService");
const FileService = require("./FileService");
const FileCleanupService = require("./FileCleanupService");
const ReactionService = require("./ReactionService");
const SearchService = require("./SearchService");
const ExportService = require("./ExportService");
const BackupService = require("./BackupService");
const InviteService = require("./InviteService");
const NotificationService = require("./NotificationService");
const CallService = require("./CallService");
const GeoLocationService = require("./GeoLocationService");
const StatsService = require("./StatsService");
const TrainingManager = require("../ai/TrainingManager");
const AssistantService = require("../ai/AssistantService");
const LogManager = require("../admin/LogManager");

function createServices() {
  const users = new Map();
  const jwtManager = new JWTManager();
  const sessionManager = new SessionManager();
  const messageService = new MessageService();
  const fileService = new FileService();
  const trainingManager = new TrainingManager();
  return {
    users,
    jwtManager,
    sessionManager,
    registerService: new RegisterService(users),
    loginService: new LoginService(users, jwtManager, sessionManager),
    passwordReset: new PasswordReset(),
    messageService,
    groupService: new GroupService(),
    fileService,
    fileCleanupService: new FileCleanupService(fileService),
    reactionService: new ReactionService(),
    searchService: new SearchService(messageService),
    exportService: new ExportService(messageService),
    backupService: new BackupService(),
    inviteService: new InviteService(),
    notificationService: new NotificationService(),
    callService: new CallService(),
    geoLocationService: new GeoLocationService(),
    statsService: new StatsService(),
    trainingManager,
    assistantService: new AssistantService(trainingManager),
    logManager: new LogManager()
  };
}

module.exports = { createServices };
