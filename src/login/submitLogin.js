import {doSignIn} from "../api/API";
import {setMessages} from "../app/appControl";

export function submitLogin(usr, pwd) {
  return (dispatch) => {
    if (!usr) {
      dispatch(setMessages({error: 'Username is not set'}));
    } else if (!pwd) {
      dispatch(setMessages({error: 'Password is not set'}));
    } else if (pwd.length < 5) {
      dispatch(setMessages({error: 'Password must be at least 5 characters'}));
    } else {
      dispatch(setMessages({info: 'Loading, please wait'}));
      doSignIn(usr, pwd).then(resp => {
        console.log(resp);
        dispatch(setMessages({info: 'Login successful'}));
        //TODO setUserToken(resp)
      }).catch(err => {
        console.log({err});
        dispatch(setMessages({error:err.message}));
      });
    }
  }
}