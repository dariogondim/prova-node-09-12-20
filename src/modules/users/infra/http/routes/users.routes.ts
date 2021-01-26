import { Router } from 'express';

import UsersControllers from '../controllers/UsersController';

const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post('/', usersControllers.create);
usersRouter.get('/', usersControllers.readAll);
usersRouter.put('/', usersControllers.update);
usersRouter.delete('/', usersControllers.delete);

export default usersRouter;
