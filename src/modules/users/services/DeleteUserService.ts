import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IResponse {
    isDeleted: boolean;
}

interface IRequest {
    id: any;
}

@injectable()
class DeleteUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute({ id }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findById(id);
        if (user) {
            const userDeleted = await this.usersRepository.delete(id);
            if (userDeleted) {
                throw new AppError('User not deleted, try again');
            } else {
                return { isDeleted: true };
            }
        } else {
            throw new AppError('User id not found', 404);
        }
    }
}

export default DeleteUserService;
