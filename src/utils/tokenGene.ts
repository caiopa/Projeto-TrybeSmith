import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface PayLoad {
  username: string
}

const secretKey: string = process.env.JWT_SECRET || 'secret';

export default function generateToken(username: PayLoad): string {
  const payload = {
    username,
  };

  const jwtconfig = {
    expiresIn: '7d',
  };

  const token = sign(payload, secretKey, jwtconfig);

  return token;
}