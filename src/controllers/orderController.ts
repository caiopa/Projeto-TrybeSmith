import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import OrderService from '../service/OrderService';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public listOrders = async (req: Request, res: Response) => {
    const result = await this.service.listAll();
    return res.status(200).json(result);
  };
}