import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import User from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    const userData: Partial<TUser> = {}
    userData.password = password || (config.default_password as string)
    //set student role
    userData.role = 'student'
    // set student id
    userData.id = '20300100001'
    //create userData
    const newUser = await User.create(userData)

    //create student
    if (Object.keys(newUser).length) {
        //set id, _id as user
        studentData.id = newUser.id
        studentData.user = newUser._id

    }
    const result = await Student.create(studentData)
    return result
}

export const userService = {
    createStudentIntoDB
}