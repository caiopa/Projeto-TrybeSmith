import express from 'express';
import OrderController from '../controllers/orderController';

const routerOrder = express.Router();

const orderController = new OrderController();

routerOrder.get('/', orderController.listOrders);

export default routerOrder;