const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true
        },

        course: {
            type: String,
            default: ""
        },

        year: {
            type: String,
            default: ""
        },

        bio: {
            type: String,
            default: ""
        },

        avatar: {
            type: String,
            default: ""
        },

        role: {
            type: String,
            enum: ["student", "admin"],
            default: "student"
        },

        connections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);