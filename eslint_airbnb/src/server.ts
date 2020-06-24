import express, { Request, Response } from 'express';
import UsersController from '@controllers/UsersController';

const userController = new UsersController();
const app = express();

app.use(express.json());

app.get('/', (request:Request, response:Response) => {
  response.json({ mensage: 'test config eslint: airbnb javascript style' });
});

app.get('/users', userController.index);
app.get('/users/:id', userController.show);
app.post('/users', userController.store);

app.listen(3333);
