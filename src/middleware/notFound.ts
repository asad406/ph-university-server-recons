/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import StatusCodes from 'http-status-codes';
import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {

    res.status(StatusCodes.NOT_FOUND).json({
        status: false,
        message : "Api not found",
        error: "",
    })
}

export default notFound