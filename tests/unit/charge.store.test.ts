import { addCharge, getAllCharges, clearCharges } from '../../src/storage/charge.store';

const mockCharge = {
  chargeId: 'u1',
  partnerId: 'test-partner',
  amount: 150,
  reference: '2025-04',
  timestamp: new Date().toISOString()
};

describe('charge.store', () => {
  it('should add a new charge', () => {
    const result = addCharge(mockCharge);
    expect(result).toBe(true);
  });

  it('should not add duplicate chargeId', () => {
    const result = addCharge(mockCharge);
    expect(result).toBe(false);
  });

  it('should retrieve all charges', () => {
    const charges = getAllCharges();
    expect(charges).toContainEqual(mockCharge);
  });

  it('should clear specific charges', () => {
    clearCharges([mockCharge.chargeId]);
    const charges = getAllCharges();
    expect(charges).not.toContainEqual(mockCharge);
  });
});