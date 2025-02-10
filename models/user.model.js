import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
        trim: true,
        minlength: 5,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"],
        minLength: 8,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;