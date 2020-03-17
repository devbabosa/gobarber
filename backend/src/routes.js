import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Humberto',
    email: 'humberto.obarbosa@gmail.com',
    password_hash: 'asdsad',
  });
  res.json(user);
});

export default routes;
