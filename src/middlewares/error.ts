import { Request, Response, NextFunction } from 'express';

const error = (err: any, req: Request, res: Response, _next:NextFunction): any => {
  const status = err.status || 500;
  const message:string = err.message || 'Erro inesperado. Por favor, tente mais tarde';
  return res.status(status).json({ message });
};

export default error;