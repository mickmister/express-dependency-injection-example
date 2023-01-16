import {AppDependencies} from './app_dependencies';

declare global {
    namespace Express {
        export interface Request {
            deps: AppDependencies;
        }
    }
}

export {}
