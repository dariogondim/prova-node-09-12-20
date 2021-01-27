import { v4 as uuidv4 } from 'uuid';

import IUpdateUserDTO from '../../dtos/IUpdateUserDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

import IUsersRepository from '../IUsersRepository';
import User from '../../infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];

    public async create(data: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { id: uuidv4() }, data);

        this.users.push(user);

        return user;
    }

    public async update(user: IUpdateUserDTO): Promise<User> {
        throw new Error('Method not implemented.');
    }

    public async readAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

    public async delete(id: string): Promise<User> {
        throw new Error('Method not implemented.');
    }

    public async findById(id: string): Promise<User> {
        throw new Error('Method not implemented.');
    }

    public async findByEmail(email: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
}

export default FakeUsersRepository;
