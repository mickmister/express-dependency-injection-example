import initApp from './express_app';
import DatabaseServiceImpl from './services/database_service';

import {AppDependencies} from './types/app_dependencies';
import {newLogger} from './utils/logger';

const dbClient = {};

const deps: AppDependencies = {
    log: newLogger(),
    database: new DatabaseServiceImpl(dbClient),
};

const app = initApp(deps);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    deps.log.info(`Listening on port ${port}`);
});
