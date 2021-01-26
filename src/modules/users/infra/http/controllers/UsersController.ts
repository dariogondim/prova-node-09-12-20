import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class UsersControllers {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json();
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
