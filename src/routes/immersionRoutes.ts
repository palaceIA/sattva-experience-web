import { Router } from 'express';
import { ImmersionController } from '../controllers/ImmersionController';
import { authMiddleware } from '../middleware/authMiddleware';
import { lotImageUpload } from '../middleware/uploadMiddleware';

const router = Router();

// Rotas PÚBLICAS (sem auth)
router.get('/', ImmersionController.getAll);
router.get('/active', ImmersionController.getActive);
router.get('/:id', ImmersionController.getById);
router.get('/:id/with-lots', ImmersionController.getWithLots);

// Rotas PROTEGIDAS (com auth)
router.post('/', authMiddleware, ImmersionController.create);
router.post('/:id/image', authMiddleware, lotImageUpload, ImmersionController.uploadImage);
router.patch('/:id', authMiddleware, ImmersionController.update);
router.put('/:id', authMiddleware, ImmersionController.update);
router.delete('/:id', authMiddleware, ImmersionController.delete);

export default router;