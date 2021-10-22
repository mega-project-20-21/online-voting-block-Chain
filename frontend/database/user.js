import mongoose from "mongoose";
const user = new mongoose.Schema(
  {
    userid: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);
export const User = mongoose.model("User", user);
//Audio close kar
