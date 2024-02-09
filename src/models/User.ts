import mongoose, { Schema } from "mongoose";
import { User } from "../entities/User.js";

const userSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
    },
    phoneNumber: {
      required: true,
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model<User>("User", userSchema);
