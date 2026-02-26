const path = require('path');
const request = require('supertest');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const loadApp = () => {
  jest.resetModules();
  return require('../app');
};

describe('GET /api/rooms/:room/messages', () => {
  it('returns messages for a room', async () => {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
      throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
    }

    const app = loadApp();
    const response = await request(app).get('/api/rooms/lobby/messages');

    expect(response.status).toBe(200);
    expect(response.body.room).toBe('lobby');
    expect(Array.isArray(response.body.messages)).toBe(true);
    expect(response.body.messages.length).toBeGreaterThan(0);
  });

  it('returns error when Supabase credentials are invalid', async () => {
    const originalUrl = process.env.SUPABASE_URL;
    const originalKey = process.env.SUPABASE_KEY;

    process.env.SUPABASE_URL = originalUrl || '';
    process.env.SUPABASE_KEY = 'invalid-key';

    const app = loadApp();
    const response = await request(app).get('/api/rooms/lobby/messages');

    expect(response.status).toBe(502);
    expect(response.body.error).toBe('Supabase query failed.');

    process.env.SUPABASE_URL = originalUrl;
    process.env.SUPABASE_KEY = originalKey;
  });
});
