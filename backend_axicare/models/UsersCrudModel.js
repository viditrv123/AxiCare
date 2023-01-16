"use strict";
import { UserSchema } from "../schemas";
import mongoose from "mongoose";

const User = mongoose.model("User", UserSchema);

const UserCrudModel = {
  create,
};

async function create(attrs) {
  const user = await User.create(attrs);
  console.log(`${user}`);
  const { _id: userId, fullNameAsPerAadhar, preferredName } = user;
  return { userId, fullNameAsPerAadhar, preferredName };
}

export default UserCrudModel;
