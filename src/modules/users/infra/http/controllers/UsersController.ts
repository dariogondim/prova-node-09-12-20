import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserService from '../../../services/UpdateUserService';

import CreateUserService from '../../../services/CreateUserService';

import ReadAllUserService from '../../../services/ReadAllUserService';

export default class UsersControllers {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, username, email, password } = request.body;

        const createUser = container.resolve(CreateUserService);

        const { user } = await createUser.execute({
            name,
            username,
            email,
            password,
        });

        delete user.password;

        return response.json({ user });
    }

    public async readAll(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const readAll = container.resolve(ReadAllUserService);
        const users = (await readAll.execute()).users.map(user => {
            // eslint-disable-next-line no-param-reassign
            delete user.password;
            return user;
        });

        return response.json({ users });
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, username, email } = request.body;
        const { id } = request.body.decoded.user;

        const updateUser = container.resolve(UpdateUserService);

        const { user } = await updateUser.execute({
            id,
            name,
            username,
            email,
        });

        delete user.password;

        return response.json({ user });
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json();
    }
}
