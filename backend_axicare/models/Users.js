"use strict";
import UserCrudModel from "./UsersCrudModel";

const UserModel = {
  register,
};

async function register(attrs) {
  console.log(`Entered Register Model block start`);
  const user = await UserCrudModel.create(attrs);
  console.log(`${JSON.stringify(user)}`);
  console.log(`Entered Register Model block`);
  return user;
}

export default UserModel;
