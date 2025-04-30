import { Request, Response } from 'express';
import { Charge } from '../types/charge.types';
import { addCharge } from '../storage/charge.store';

export const postCharge = (req: Request, res: Response) => {
  const charge: Charge = req.body;
  if (!charge.chargeId || !charge.partnerId || !charge.amount) {
    return res.status(400).json({ error: 'Invalid charge data' });
  }

  const success = addCharge(charge);
  if (!success) {
    return res.status(409).json({ error: 'Duplicate chargeId' });
  }

  return res.status(201).json({ message: 'Charge added' });
};