import express from 'express';
// import error from './middlewares/error';
import routerProducts from './routers/products';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

// app.use(error);

export default app;
