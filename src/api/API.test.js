import { TEST } from './API';

describe('doPost', () => {
  const opts = {
    headers: {'Authorization': 'Bearer abcdef'}
  }

  it('should reject unknown endpoints', async () => {
    await expect(TEST.doPost('/unknown', opts)).rejects.toEqual(
      expect.objectContaining({
        message: expect.any(String),
        status: 404
      })
    );
  });

  it('should reject invalid logins', async () => {
    await expect(TEST.doPost('/login', opts)).rejects.toEqual(
      expect.objectContaining({
        message: 'Unauthorized',
        status: 401
      })
    );
  });

});
