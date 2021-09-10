function makeAuthHeader(usr, pwd) {
  const TestToken = btoa([usr, pwd].join(":"));
  return `BASIC ${TestToken}`;
}

export function doSignIn(username, password) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': makeAuthHeader(username, password)
  };
  return doPost('/login', {headers});
};

 //////////////////////////////////////
////////Mock server response here/////

const TokenStore = {
  'YWRtaW46YWRtaW4=': {
    isAdmin: true,
    accessToken:null
  },
  'aGFwcHk6Z2lsbW91cg==': {
    isAdmin: false,
    accessToken:null
  }
}

function doPost(url, options) {
  // console.log('posting...', url, options);
  const { headers } = options;
  if(url==='/login') {
    return handleLogin(headers.Authorization);
  } else {
    return Promise.reject({status:404, message:'Not found'});
  }
}

function handleLogin(authorization = ':') {
  const user = decode(authorization);
  if (user !== null) {
    const { accessToken } = user;
    return Promise.resolve({status:200, message: 'OK', accessToken});
  } else {
    return Promise.reject({status:401, message:'Unauthorized'});
  }
}

const TokenLifetime = 60000 * 60 * 30; //half an hour

function decode(authorization) {
  const token = authorization.split(' ')[1].trim();
  const user = TokenStore[token];
  if(!user) return null;
  const { isAdmin } = user;
  user.accessToken = btoa(JSON.stringify({isAdmin, expiry: Date.now() + TokenLifetime}));
  return user;
}