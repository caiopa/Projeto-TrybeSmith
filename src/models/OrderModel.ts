import { Pool } from 'mysql2/promise';
// import connection from './connection';
import { IOrder } from '../interfaces';
// import generateToken from '../utils/tokenGene';

export default class OrderModel {
  private connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async listAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id`,
    );
    return result as IOrder[];
  }
}