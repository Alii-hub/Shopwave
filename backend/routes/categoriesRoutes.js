import express from 'express';
import { isAdmin, isAuthorized } from '../middlewares/authMiddleware.js';
import { createCategoryController, getAllCategoriesController } from '../controllers/categoriesController.js';



const categoriesRouter =express.Router();

// http://localhost:8080/api/v1/categories/ - POST
//Admin routes
categoriesRouter.post("/",isAuthorized, isAdmin ,createCategoryController)

// http://localhost:8080/api/v1/categories/ - GET

categoriesRouter.get("/" ,getAllCategoriesController)


export default categoriesRouter;