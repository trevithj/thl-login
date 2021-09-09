const DEFAULT_STATE = {
  view: 'login',
  info: null,
  warn: null,
  error: null,
}

export default function appControl(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "APP_CONTROL_SET":
      return {...state, ...action.values};
    default: return state;
  }
};

export function appControlSet(values, clearMessages = false) {
  //Allow reset of messages, but values can still overwrite the nulls
  values = clearMessages ? {info: null, warn: null, error: null, ...values} : values;
  return {type: 'APP_CONTROL_SET', values};
}
