import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import AppError from '../../errors/AppError';
import routes from './routes';

import '../typeorm';
import '../../container';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (
        err: Error,
        _request: Request,
        response: Response,
        _next: NextFunction,
    ) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ status: 'error', message: err.message });
        }

        console.log(err);

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});
