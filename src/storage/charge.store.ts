import { Charge } from '../types/charge.types';

const chargeMap = new Map<string, Charge>();

export const addCharge = (charge: Charge): boolean => {
  if (chargeMap.has(charge.chargeId)) return false;
  chargeMap.set(charge.chargeId, charge);
  return true;
};

export const getAllCharges = (): Charge[] => Array.from(chargeMap.values());

export const clearCharges = (chargeIds: string[]) => {
  chargeIds.forEach((id) => chargeMap.delete(id));
};