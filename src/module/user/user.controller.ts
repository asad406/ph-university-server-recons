/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        const result = await userService.createStudentIntoDB(password, studentData);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    } catch (err) {
        // res.status(500).json({
        //   success: false,
        //   message: err.message || 'something went wrong',
        //   error: err,
        // });
        next(err)
    }
};

export const userController = {
    createStudent
}