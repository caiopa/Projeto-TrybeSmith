import { IOrder } from '../interfaces';
import OrderModel from '../models/OrderModel';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;
 
  constructor() {
    this.model = new OrderModel(connection);
  }

  public async listAll(): Promise<IOrder[]> {
    const result = await this.model.listAll();
    return result;
  } 
}