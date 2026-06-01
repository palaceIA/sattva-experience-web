import { Router } from 'express';
import { LotController } from '../controllers/LotController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Rotas PÚBLICAS (sem auth)
router.get('/', LotController.getAll);
router.get('/expired', LotController.getExpiredLots);
router.get('/upcoming-expiry', LotController.getUpcomingLotsToExpire);
router.get('/:id', LotController.getById);
router.get('/immersion/:id', LotController.getByImmersionId);
router.get('/immersion/:id/active', LotController.getActiveLot);

// Rotas PROTEGIDAS (com auth)
router.post('/', authMiddleware, LotController.create);
router.patch('/:id', authMiddleware, LotController.update);
router.put('/:id', authMiddleware, LotController.update);
router.post('/:id/buy', authMiddleware, LotController.buy);
router.post('/:id/add-quantity', authMiddleware, LotController.addQuantity);
router.delete('/:id', authMiddleware, LotController.delete);

export default router;