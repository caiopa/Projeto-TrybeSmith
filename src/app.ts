import express from 'express';
// import error from './middlewares/error';
import routerProducts from './routers/products';
import routerUser from './routers/users';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.use('/users', routerUser);

// app.use(error);

export default app;
