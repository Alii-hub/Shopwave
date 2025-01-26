import { response } from "express";
import { encryptPassword, matchPassword } from "../helper/userHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ sucess: false, message: "All fields are required" });
    }

    //checking user email already exist or not?
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res
        .status(400)
        .send({ sucess: false, message: "Email already exists" });
    }

    //encrypting user password
    const hashedPassword = await encryptPassword(password);
    //creating new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .send({ sucess: true, message: "User registered successfully" });
  } catch (error) {
    console.log(`registerController error: ${error}`);
    return res
      .status(400)
      .send({ sucess: false, message: "error in registerController", error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check validation
    if (!email || !password) {
      return res
        .status(400)
        .send({ sucess: false, message: "All fields are required" });
    }

    //check user email is present in database or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .send({ sucess: false, message: "Email not registered" });
    }

    //matching password
    const isMatch = await matchPassword(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send({ sucess: false, message: "Incorrect Email/Password" });
    }

    //Remove password field to send user data from backend to frontend
    user.password = undefined;
  
    //generate token
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });
    //return success response
    return res
    .cookie("token", token, {httpOnly: true, secure: true})
      .status(200)
      .send({ sucess: true, message: "Login succesfully", user, token });
  } catch (error) {
    console.log(`loginController error: ${error}`);
    return res
      .status(400)
      .send({ sucess: false, message: "error in loginController", error });
  }
};

export { registerController, loginController };
