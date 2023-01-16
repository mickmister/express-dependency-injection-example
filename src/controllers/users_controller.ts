import express from 'express';
import {User} from '../types/model/user';

const userRouter = express.Router();

userRouter.get<{id: string}, User>('/:id', async (req, res) => {
    const {log, database} = req.deps;

    const userId = req.params.id;
    log.debug(`Getting user with id ${userId}`);

    try {
        const user = await database.users.get(userId);
        res.json(user);
    } catch (e: any) {
        log.warn(`Error fetching user: ${e.message}`);
        res.writeHead(404);
        res.send();
    }
});

export default userRouter;
