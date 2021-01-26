import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class SessionsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json();
    }
}
