import {makeAuthHeader} from "../common/utils";

interface Options {
  headers: {
    'Content-Type'?: string,
    'Authorization'?: string,
  }
}

export function doSignIn(username:string, password:string) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': makeAuthHeader(username, password)
  };
  return doPost('/login', {headers});
};

 //////////////////////////////////////
////////Mock server response here/////

const TokenStore = new Map([
  ['YWRtaW46YWRtaW4=', {
    isAdmin: true,
    accessToken:null
  }],
  ['aGFwcHk6Z2lsbW91cg==', {
    isAdmin: false,
    accessToken:null
  }]
]);

function doPost(url:string, options:Options) {
  // console.log('posting...', url, options);
  const { headers } = options;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url==='/login') {
        const resp = handleLogin(headers.Authorization);
        if(resp.status===200) {
          resolve(resp);
        } else {
          reject(resp);
        }
      } else {
        reject({status:404, message:'Not found'});
      }
    }, 600); //mock network delay to allow loading messages time to be seen
  });

}

function handleLogin(authorization = ':') {
  const user = decode(authorization);
  if (user !== null) {
    const { accessToken } = user;
    return {status:200, message: 'OK', accessToken};
  } else {
    return {status:401, message:'Unauthorized'};
  }
}

const TokenLifetime = 60000 * 60 * 30; //half an hour

function decode(authorization:string) {
  const token:string = authorization.split(' ')[1].trim();
  const user:any = TokenStore.get(token);
  if(!user) return null;
  const { isAdmin } = user;
  user.accessToken = btoa(JSON.stringify({isAdmin, expiry: Date.now() + TokenLifetime}));
  return user;
}

export const TEST = { doPost };
