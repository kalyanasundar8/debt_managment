export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode = 500,
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}
