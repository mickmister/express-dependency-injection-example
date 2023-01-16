import {DatabaseService} from '../types/database_service';

import {User} from '../types/model/user';

export default class DatabaseServiceImpl implements DatabaseService {
    users: UserService;

    constructor(private databaseClient: any) {
        this.users = new UserService(databaseClient);
    }
}

class UserService {
    constructor(private databaseClient: any) {}

    get = async (userId: string) => {
        return {} as User;
    }
}
