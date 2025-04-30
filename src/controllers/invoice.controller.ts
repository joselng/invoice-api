import { RequestHandler } from 'express';
import { getAllCharges, clearCharges } from '../storage/charge.store';
import { Invoice } from '../types/charge.types';

export const getInvoices: RequestHandler = (_req, res) => {
  const allCharges = getAllCharges();
  const grouped = new Map<string, Invoice>();

  for (const charge of allCharges) {
    if (!grouped.has(charge.partnerId)) {
      grouped.set(charge.partnerId, {
        partnerId: charge.partnerId,
        total: 0,
        charges: []
      });
    }
    const invoice = grouped.get(charge.partnerId)!;
    invoice.total += charge.amount;
    invoice.charges.push(charge);
  }

  const invoices = Array.from(grouped.values()).sort((a, b) => b.total - a.total);
  const allInvolvedChargeIds = allCharges.map((c) => c.chargeId);
  clearCharges(allInvolvedChargeIds);

  res.json(invoices);
};
