export function decodeAccessToken(accessToken) {
  try {
    return [JSON.parse(atob(accessToken)), null];
  } catch(error) {
    return [null, error];
  }
}

export function makeAuthHeader(usr, pwd) {
  const TestToken = btoa([usr, pwd].join(":"));
  return `BASIC ${TestToken}`;
}