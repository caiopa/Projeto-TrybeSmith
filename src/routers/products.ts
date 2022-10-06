import express from 'express';
import ProductController from '../controllers/productController';

const routerProducts = express.Router();

const productController = new ProductController();

routerProducts.post('/', productController.createProduct);

export default routerProducts;