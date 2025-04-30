import { Router } from 'express';
import { postCharge } from '../controllers/charge.controller';
import { getInvoices } from '../controllers/invoice.controller';

const router = Router();

router.post('/charges', postCharge);
router.get('/invoices', getInvoices);

export default router;