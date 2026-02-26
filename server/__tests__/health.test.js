const path = require('path');
const request = require('supertest');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const loadApp = () => {
  jest.resetModules();
  return require('../app');
};

describe('GET /api/health', () => {
  it('returns ok when Supabase responds', async () => {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
      throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
    }

    const app = loadApp();
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.dataCount).toBe(1);
  });

  it('returns error when Supabase credentials are invalid', async () => {
    const originalUrl = process.env.SUPABASE_URL;
    const originalKey = process.env.SUPABASE_KEY;

    process.env.SUPABASE_URL = originalUrl || '';
    process.env.SUPABASE_KEY = 'invalid-key';

    const app = loadApp();
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(502);
    expect(response.body.error).toBe('Supabase query failed.');

    process.env.SUPABASE_URL = originalUrl;
    process.env.SUPABASE_KEY = originalKey;
  });
});
