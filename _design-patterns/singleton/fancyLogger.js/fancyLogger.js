class FancyLogger {
  constructor() {
    if (FancyLogger.instance === null || FancyLogger.instance === undefined) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;

