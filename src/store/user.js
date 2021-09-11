import {decodeAccessToken} from "../common/utils";

function user(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      const {accessToken} = action.resp;
      const [user, error] = decodeAccessToken(accessToken)
      if (error) {
        return {...state, error};
      } else {
        return {...user, accessToken};
      }
    }

    default:
      return state;
  }
};

export default user;
