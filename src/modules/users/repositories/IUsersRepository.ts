import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    readAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<any>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
}
