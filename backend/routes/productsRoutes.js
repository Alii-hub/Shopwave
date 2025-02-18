import express from 'express';
import { isAdmin, isAuthorized } from '../middlewares/authMiddleware.js';
import { addProductController } from '../controllers/productsController.js';
import { upload } from '../middlewares/multerMiddleware.js';



const productsRouter =express.Router();

//user
// http://localhost:8080/api/v1/products/ - GET


//ADMIN
// http://localhost:8080/api/v1/products/ - POST
productsRouter.post("/",upload.single("picture"),isAuthorized, isAdmin ,addProductController)

// http://localhost:8080/api/v1/products/:slug    slug ja raha ha agy :slug - delete
// categoriesRouter.delete("/:slug",isAuthorized, isAdmin , deleteCategoryController)

// http://localhost:8080/api/v1/products/:slug    slug ja raha ha agy :slug    - update
// categoriesRouter.put("/:slug",isAuthorized, isAdmin , updateCategoryController)


// http://localhost:8080/api/v1/products/:slug    slug ja raha ha agy :slug    - get
// categoriesRouter.get("/:slug",isAuthorized, isAdmin , getSingleCategoryController)








export default productsRouter;