import { Router } from 'express';
import EstadosController from '../controllers/estados';

const estadosRouter = Router();

const estadosController = new EstadosController();

estadosRouter.get('/', estadosController.showRest);

export default estadosRouter;
