import type { NextFunction, Request, RequestHandler, Response } from "express";
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => RequestHandler;
//# sourceMappingURL=async.handler.d.ts.map