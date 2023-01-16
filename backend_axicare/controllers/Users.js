"use strict";
import UserModel from "../models/Users";

const UserController = {
  register,
};

async function register(req, res) {
  console.log(`Entered Register block`);
  const { body } = req;
  const responseBody = await UserModel.register(body);
  console.log(`${JSON.stringify(responseBody)}`);
  console.log(`Entered Register block end`);
  return res.json(responseBody);
}

export default UserController;
