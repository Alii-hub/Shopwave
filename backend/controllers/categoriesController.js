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

const deleteCategoryController = async (req, res) => {
  try {
    const slug  = req.params.slug;

    const category = await categoriesModel.findOneAndDelete({slug});
    if (!category) {
      return res
       .status(404)
       .send({ sucess: false, message: "Category not found" });
    }
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Category deleted successfully",
      });
  } catch (error) {
    console.log(`deleteCategoryController error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in deleteCategoryController",
        error,
      });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const {slug}  = req.params;
    const {name} = req.body;

    //validationcheck
    if (!name) {
      return res
       .status(400)
       .send({ sucess: false, message: "Category name is required" });
    }



    const category = await categoriesModel.findOneAndUpdate({slug} , {name , slug: slugify(name , {lower:true , strict:true})}, {new: true});
    if (!category) {
      return res
       .status(404)
       .send({ sucess: false, message: "Category not found" });
    }
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Category updated successfully",
      });
  } catch (error) {
    console.log(`updateCategoryController error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in updateCategoryController",
        error,
      });
  }
};

const getSingleCategoryController = async (req, res) => {
  try {
    const slug  = req.params.slug;

    const category = await categoriesModel.findOne({slug});
    if (!category) {
      return res
       .status(404)
       .send({ sucess: false, message: "Category not found" });
    }
    return res
      .status(201)
      .send({
        sucess: true,
        message: "Category fetched successfully",
        category
      });
  } catch (error) {
    console.log(`getSingleCategoryController error: ${error}`);
    return res
      .status(400)
      .send({
        sucess: false,
        message: "error in getSingleCategoryController",
        error,
      });
  }
};

export { createCategoryController, getAllCategoriesController, deleteCategoryController, updateCategoryController, getSingleCategoryController};
