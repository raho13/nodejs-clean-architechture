import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
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
}, { timestamps: true, versionKey: false });
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map