import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUsersRepository from '../../../repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    findById(id: string): Promise<User | undefined> {
        throw new Error('Method not implemented.');
    }

    findByEmail(email: string): Promise<User | undefined> {
        throw new Error('Method not implemented.');
    }

    create(data: ICreateUserDTO): Promise<User> {
        throw new Error('Method not implemented.');
    }

    readAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

    update(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

    delete(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }
}

export default UsersRepository;
