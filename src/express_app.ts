import express from 'express';
import {AppDependencies} from './types/app_dependencies';

import userRouter from './controllers/users_controller';

export default function initApp(deps: AppDependencies): express.Express {
    const app = express();

    app.use((req, res, next) => {
        req.deps = deps;
        next();
    });

    app.use('/users', userRouter);

    return app;
}
