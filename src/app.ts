import express from 'express';
// import error from './middlewares/error';
import routerProduct from './routers/products';
import routerUser from './routers/users';
import routerOrder from './routers/orders';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);

app.use('/users', routerUser);

app.use('/orders', routerOrder);

// app.use(error);

export default app;
