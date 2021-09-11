import {doSignIn} from "../api/API";
import {setMessages} from "../app/appControl";

//Handle the validation logic here
export function submitLogin(usr, pwd) {
  return (dispatch) => {
    const error = validatePassword(pwd);
    if (!usr) {
      dispatch(setMessages({error: 'Username is not set'}));
    } else if (error !== null) {
      dispatch(setMessages({error}));
    } else {
      dispatch(submitLoginThunk(usr, pwd));
    }
  }
}

function validatePassword(pwd) {
  let error = null; //ok by default
  if(!pwd) {
    error = 'Password is not set';
  } else if (pwd.length < 5) {
    error = 'Password must be at least 5 characters';
  } else if (pwd.indexOf('m') === -1) {
    error = 'Password must contain a lower-case "m"!';
  } //else no error
  return error;
}

//Handle the submit logic here
function submitLoginThunk(usr, pwd) {
  return (dispatch) => {
    dispatch(setMessages({info: 'Signing in, please wait'}));
    doSignIn(usr, pwd)
    .then(resp => {
      if(resp.status===200) {
        dispatch({type:'LOGIN_SUCCESS', info: 'SignIn was successful', resp});
      } else {
        throw new Error(resp);
      }
    }).catch(err => {
      console.log({err});
      dispatch(setMessages({error: err.message}));
    });
  }
};

export const TEST = { validatePassword };
