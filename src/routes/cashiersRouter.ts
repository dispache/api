import { Router } from 'express';

import CashiersController from '../controllers/CashiersController';

const router = Router();

router.get('/cashiers', CashiersController.getAllCashiers);
router.get('/cashiers/:id', CashiersController.getOneCashier);
router.post('/cashiers', CashiersController.createCashier);
router.put('/cashiers/:id', CashiersController.updateCashier);
router.delete('/cashiers/:id', CashiersController.deleteCashier);
router.get('/gettargetcashiers1', CashiersController.getTargetCashiers1);
router.get('/gettargetcashiers2', CashiersController.getTargetCashiers2);

export default router;