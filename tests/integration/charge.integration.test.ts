import request from 'supertest';
import app from '../../src/app';

describe('GET /invoices', () => {
  it('should return invoices and clear charges', async () => {
    await request(app).post('/charges').send({
      chargeId: 'c3',
      partnerId: 'p1',
      amount: 200,
      reference: '2024-01',
      timestamp: new Date().toISOString()
    });

    await request(app).post('/charges').send({
      chargeId: 'c4',
      partnerId: 'p1',
      amount: 300,
      reference: '2024-01',
      timestamp: new Date().toISOString()
    });

    const res = await request(app).get('/invoices');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].total).toBe(500);

    const resAfter = await request(app).get('/invoices');
    expect(resAfter.body.length).toBe(0);
  });
});