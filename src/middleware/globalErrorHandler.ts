/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500
    const message = err.message || 'something went wrong'

  res.status(statusCode).json({
        status: false,
        message,
        error: err,
        stack: err.stack
    })
}

export default globalErrorHandler