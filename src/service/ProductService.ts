import IProduct from '../interfaces';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  private model: ProductModel;
 
  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    const result = await this.model.create(product);
    return result;
  }
}