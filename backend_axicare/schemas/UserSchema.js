import { Schema } from "mongoose";

const UserSchema = {
  fullNameAsPerAadhar: { type: String },
  preferredName: { type: String },
  aadharNumner: { type: String },
  birthGender: { type: String },
  trueGender: { type: String },
  monbileNumber: { type: Number },
  userName: { type: String },
  password: { type: String },
  panNumber: { type: String },
};

export default UserSchema;
