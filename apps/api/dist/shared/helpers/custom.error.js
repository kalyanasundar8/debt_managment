export class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode = 500) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=custom.error.js.map