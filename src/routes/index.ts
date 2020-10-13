import { Router } from 'express';
import estadosRouter from './estados';
import estadosV2Router from './estados_v2';

const routes = Router();

routes.use('/estados', estadosRouter);
routes.use('/v2/estados', estadosV2Router);

export default routes;
