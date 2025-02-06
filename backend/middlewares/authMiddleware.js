import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const isAuthorized = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res
        .status(401)
        .send({
          sucess: false,
          message: "Please login to access this resource",
        });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decodedToken.id);
    next();
  } catch (error) {
    console.log(`isAuthorized Middleware error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in isAutherized Middleware",
        error,
      });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    // const {user} = req  //or
    const user = req.user;
    console.log(user);
    if(!user || user.role !==1){
        return res.status(401).send({sucess : false , message:"You are not authorized to access this resource"})
    }
    next()
  } catch (error) {
    console.log(`isAdmin Middleware error: ${error}`);
    return res
      .status(400)
      .send({ sucess: false, message: "error in isAdmin Middleware", error });
  }
};
export { isAuthorized, isAdmin };
