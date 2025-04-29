export interface Charge {
  chargeId: string;
  partnerId: string;
  amount: number;
  reference: string;
  timestamp: string;
}

export interface Invoice {
  partnerId: string;
  total: number;
  charges: Charge[];
}