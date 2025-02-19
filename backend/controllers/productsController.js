import { uploadImageOnCloudinary } from "../helper/cloudinaryHelper.js";
import productsModel from "../models/productsModel.js";
const addProductController = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    const picture = req.file?.fieldname;
    const picturePath = req.file?.path;

    if (
      !title ||
      !description ||
      !category ||
      !price ||
      !picture ||
      !picturePath
    ) {
      return res
        .status(400)
        .send({ sucess: false, message: "All fields are required" });
    }

    // upload image on cloudinary
    const { secure_url, public_id } = await uploadImageOnCloudinary(
      picturePath,
      "Products Images"
    );

    if (!secure_url) {
      return res
        .status(400)
        .send({
          sucess: false,
          message: "Error while uploading image",
          error: secure_url,
        });
    }

    const product = await productsModel.create({
      title,
      description,
      category,
      price,
      user: req.user._id, // Assuming user is logged in and req.user has _id property. You should replace req.user with your actual user object.
      picture: {
        secure_url,
        public_id,
      },
    });
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Product uploaded successfully",
        product,
      });
  } catch (error) {
    console.log(`addProductController error: ${error}`);
    return res.status(400).send({
      sucess: false,
      message: "error in addProductController",
      error,
    });
  }
};

export { addProductController };
