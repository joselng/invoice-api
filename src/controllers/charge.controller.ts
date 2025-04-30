import { RequestHandler } from 'express';
import { Charge } from '../types/charge.types';
import { addCharge } from '../storage/charge.store';

export const postCharge: RequestHandler = (req, res) => {
  const charge: Charge = req.body;
  if (!charge.chargeId || !charge.partnerId || !charge.amount) {
    res.status(400).json({ error: 'Invalid charge data' });
    return;
  }

  const success = addCharge(charge);
  if (!success) {
    res.status(409).json({ error: 'Duplicate chargeId' });
    return;
  }

  res.status(201).json({ message: 'Charge added' });
};
