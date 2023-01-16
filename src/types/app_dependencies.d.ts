import {Logger} from '../utils/logger';
import {DatabaseService} from './database_service';

export type AppDependencies = {
    log: Logger;
    database: DatabaseService;
};
