import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IResponse {
    users: User[];
}

@injectable()
class ReadAllUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(): Promise<IResponse> {
        const users = await this.usersRepository.readAll();

        return { users };
    }
}

export default ReadAllUserService;
