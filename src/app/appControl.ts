import {AppCtrlAction, AppCtrlValues, LoginAction} from '../store/types';

const DEFAULT_STATE = {
  view: 'login',
  info: null,
  warn: null,
  error: null,
}

export default function appControl(state = DEFAULT_STATE, action:any) {
  switch (action.type) {
    case "APP_CONTROL_SET": {
      const act:AppCtrlAction = action;
      return {...state, ...act.values};
    }
    case "LOGIN_SUCCESS": {
      const act:LoginAction = action;
      const { info } = act;
      const view = 'main';
      return {...DEFAULT_STATE, info, view};
    }
    default: return state;
  }
};

export function appControlSet(values:AppCtrlValues, clearMessages = false) {
  //Allow reset of messages, but values can still overwrite the nulls
  values = clearMessages ? {info: null, warn: null, error: null, ...values} : values;
  return {type: 'APP_CONTROL_SET', values};
}

export function setMessages(values:AppCtrlValues) {
  return appControlSet(values, true);
}
