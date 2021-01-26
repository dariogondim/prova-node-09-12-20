import { Router } from 'express';

import UsersControllers from '../controllers/UsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post('/', usersControllers.create);
usersRouter.get('/', ensureAuthenticated, usersControllers.readAll);
usersRouter.put('/', ensureAuthenticated, usersControllers.update);
usersRouter.delete('/:id', ensureAuthenticated, usersControllers.delete);

export default usersRouter;
