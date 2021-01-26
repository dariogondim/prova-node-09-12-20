import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

type IRequest = IUpdateUserDTO;

interface IResponse {
    user: User;
}

@injectable()
class UpdateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute({
        id,
        name,
        username,
        email,
    }: IRequest): Promise<IResponse> {
        const checkUserExists = await this.usersRepository.findByEmail(email);
        if (checkUserExists && checkUserExists.id !== id) {
            throw new AppError('Email address already used by another user');
        }

        const user = await this.usersRepository.update({
            id,
            name,
            username,
            email,
        });

        return { user };
    }
}

export default UpdateUserService;
