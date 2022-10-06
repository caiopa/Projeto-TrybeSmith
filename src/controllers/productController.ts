import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import ProductService from '../service/ProductService';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
    return res.status(201).json(product);
  };

  public listProducts = async (req: Request, res: Response) => {
    const allProducts = await this.service.listProducts();
    return res.status(200).json(allProducts);
  };
}