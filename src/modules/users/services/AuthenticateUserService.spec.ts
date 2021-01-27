import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import AppError from '../../../shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        authenticateUser = new AuthenticateUserService(fakeUsersRepository);
    });

    it('should be able to authenticate', async () => {
        const user = await fakeUsersRepository.create({
            name: 'dario',
            email: 'dario.sjc@gmail.com',
            username: 'dariogondim',
            password: '123456',
        });

        const response = await authenticateUser.execute({
            email: 'dario.sjc@gmail.com',
            password: '123456',
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);
    });

    it('should not be able to authenticate with a non existing user', async () => {
        await expect(
            authenticateUser.execute({
                email: 'dario2.sjc@gmail.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate with wrong password', async () => {
        await fakeUsersRepository.create({
            name: 'dario',
            email: 'dario.sjc@gmail.com',
            username: 'dariogondim',
            password: '123456',
        });

        await expect(
            authenticateUser.execute({
                email: 'dario.sjc@gmail.com',
                password: '12345',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
