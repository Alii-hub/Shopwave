import categoriesModel from "../models/categoriesModel.js";
import slugify from "slugify";

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .send({ sucess: false, message: "Category name is required" });
    }

    //checking category already exist or not?
    const isExist = await categoriesModel.findOne({ name });
    if (isExist) {
      return res
        .status(400)
        .send({ sucess: false, message: "Category already exists" });
    }

    //creating new user
    const category = await categoriesModel.create({
      name, //Samsung Mobile
      slug: slugify(name, { lower: true, strict: true }), // slugify convert inti samsung-mobile
    });
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Category created successfully",
        category,
      });
  } catch (error) {
    console.log(`createCategoryController error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in createCategoryController",
        error,
      });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    //Fetching all categories from the database
    const categories = await categoriesModel.find({});
   
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Categories fetched successfully",
        categories,
      });
  } catch (error) {
    console.log(`getAllCategoriesController error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in getAllCategoriesController",
        error,
      });
  }
};

export { createCategoryController, getAllCategoriesController };
