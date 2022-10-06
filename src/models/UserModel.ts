import { Pool, ResultSetHeader } from 'mysql2/promise';
// import connection from './connection';
import { IUser } from '../interfaces';
import generateToken from '../utils/tokenGene';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<string> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?, ?, ?, ?)',
      [username, classe, level, password],
    );
    // gerar token
    const token = await generateToken({ username });
    return token;
  }
}