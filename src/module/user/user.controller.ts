/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        const result = await userService.createStudentIntoDB(password, studentData);

        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
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