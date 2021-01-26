import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';

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
        return response.json();
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json();
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json();
    }
}
