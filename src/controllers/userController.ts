import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import UserService from '../service/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const token = await this.service.create({ username, classe, level, password });
    return res.status(201).json({ token });
  };
}