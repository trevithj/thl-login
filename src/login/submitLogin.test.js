import { submitLogin, TEST } from  './submitLogin';

describe('submitLogin', () => {
  const dispatch = jest.fn();
  it('should dispatch an error if username is empty', () => {
    const thunk = submitLogin('', 'completelyvalid');
    expect(typeof thunk).toEqual('function');
    thunk(dispatch);
    expect(dispatch.mock.calls.length).toBe(1); //called once
    const action = dispatch.mock.calls[0][0];
    expect(action.values.error).toEqual('Username is not set');
  });
});

describe('validatePassword', () => {
  it('should return null if password is valid', () => {
    const result = TEST.validatePassword('cadmium');
    expect(result).toBeNull();
  });

  it('should return message if password is empty', () => {
    const result = TEST.validatePassword('');
    expect(result).toContain(' is not set');
  });

  it('should return message if password is too short', () => {
    const result = TEST.validatePassword('xx');
    expect(result).toContain(' must be at least ');
  });

  it('should return message if password has invalid characters', () => {
    const result = TEST.validatePassword('abcdefghijklMnopqrstuvwxyz0123456789');
    expect(result).toContain(' must contain a lower-case "m"');
  });
});
