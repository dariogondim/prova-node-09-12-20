import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    readAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    delete(user: User): Promise<User>;
}
