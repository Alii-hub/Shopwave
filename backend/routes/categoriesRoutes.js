import express from 'express';
import { isAdmin, isAuthorized } from '../middlewares/authMiddleware.js';
import { createCategoryController, deleteCategoryController, getAllCategoriesController, getSingleCategoryController, updateCategoryController } from '../controllers/categoriesController.js';



const categoriesRouter =express.Router();

//user
// http://localhost:8080/api/v1/categories/ - GET
categoriesRouter.get("/" ,getAllCategoriesController)


//ADMIN
// http://localhost:8080/api/v1/categories/ - POST
categoriesRouter.post("/",isAuthorized, isAdmin ,createCategoryController)

// http://localhost:8080/api/v1/categories/:slug    slug ja raha ha agy :slug - delete
categoriesRouter.delete("/:slug",isAuthorized, isAdmin , deleteCategoryController)

// http://localhost:8080/api/v1/categories/:slug    slug ja raha ha agy :slug    - update
categoriesRouter.put("/:slug",isAuthorized, isAdmin , updateCategoryController)


// http://localhost:8080/api/v1/categories/:slug    slug ja raha ha agy :slug    - get
categoriesRouter.get("/:slug",isAuthorized, isAdmin , getSingleCategoryController)








export default categoriesRouter;