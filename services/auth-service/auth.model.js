import mongoose from "mongoose";

const authUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const AuthUser = mongoose.models.AuthUser || mongoose.model("AuthUser", authUserSchema);

export default AuthUser;
