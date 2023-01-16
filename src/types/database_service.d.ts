import {User} from './model/user'

export type UserService = {
    get: (userId: string) => Promise<User>;
}

export type DatabaseService = {
    users: UserService;
}
