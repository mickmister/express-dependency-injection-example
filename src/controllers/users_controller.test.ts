import supertest from 'supertest';

import initApp from '../express_app';
import {User} from '../types/model/user';
import {DatabaseService} from '../types/database_service';
import {Logger, newTestLogger} from '../utils/logger';

describe('UsersController', () => {
    let app;
    let testLogger: Logger;
    let testDatabaseService: DatabaseService;

    const testUser: User = {
        username: 'myusername',
        first_name: 'First',
        last_name: 'Last',
    }

    beforeEach(() => {
        testLogger = newTestLogger();
        testDatabaseService = {
            users: {
                get: jest.fn().mockResolvedValue(testUser),
            }
        }

        app = initApp({
            log: testLogger,
            database: testDatabaseService,
        });
    });

    test('should log debug message', async () => {
        await supertest(app).get('/users/1')
            .send()
            .expect(200);

        expect(testLogger.debug).toHaveBeenCalledWith('Getting user with id 1');
    });

    test('should return user', async () => {
        const response = await supertest(app).get('/users/1')
            .send()
            .expect(200)

        expect(response.body).toEqual(testUser);
    });

    test('should return 404 if user not found', async () => {
        testDatabaseService.users.get = jest.fn().mockRejectedValue({message: 'User not found'});

        await supertest(app).get('/users/1')
            .send()
            .expect(404)

        expect(testLogger.warn).toHaveBeenCalledWith('Error fetching user: User not found');
    });
});
