import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<TUser>({
    id: { type: String, require: [true, '{VALUE} is required'] },
    password: {
        type: String,
        require: [true, '{VALUE} is required']
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
        require: true,
    },
    role: {
        type: String,
        enum: { values: ['admin', 'student', 'faculty'] },
        message: '{VALUE} is not valid'
    },
    status: {
        type: String,
        enum: { values: ['in-progress', 'blocked'] },
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false,
        require: true
    }
},
    {
        timestamps: true
    }
)


// pre save middleware/ hook : will work on create()  save()
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save  data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});


// post save middleware / hook
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });

const User = model<TUser>('User', userSchema)
export default User