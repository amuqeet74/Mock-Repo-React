const path = require('path');
const request = require('supertest');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

const loadApp = () => {
  jest.resetModules();
  return require('../app');
};

describe('POST /api/users', () => {
  beforeEach(async () => {
    // Clean up test data before each test
    if (supabase) {
      await supabase.from('users').delete().eq('id', '1');
      await supabase.from('users').delete().eq('id', '2');
    }
  });

  it('creates a user when all fields provided (happy path)', async () => {
    const app = loadApp();

    const payload = { id: '1', name: 'Charlie', room: 'NewRoom' };

    const response = await request(app).post('/api/users').send(payload);
    expect(response.status).toBe(201);
    expect(response.body.user).toBeDefined();
    expect(response.body.user.name).toBe('charlie');
    expect(response.body.user.room).toBe('newroom');
  });

  it('returns 400 when required fields missing (sad path)', async () => {
    const app = loadApp();

    const payload = { id: '2', name: 'NoRoom' };

    const response = await request(app).post('/api/users').send(payload);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('id, name and room are required.');
  });
});
