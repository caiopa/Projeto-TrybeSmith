import express from 'express';
import UserController from '../controllers/userController';

const routerProducts = express.Router();

const userController = new UserController();

routerProducts.post('/', userController.createUser);

export default routerProducts;