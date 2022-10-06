import { IUser } from '../interfaces';
import UserModel from '../models/UserModel';
import connection from '../models/connection';

export default class UsertService {
  private model: UserModel;
 
  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const token = await this.model.create(user);
    return token;
  }
}