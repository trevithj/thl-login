//{type:'LOGIN_SUCCESS', info: 'SignIn was successful', resp}

export interface Action {
  readonly type: string;
}

export interface LoginAction extends Action {
  info: string,
  resp: any,
}

export interface AppCtrlAction extends Action {
  values: AppCtrlValues,
}

export interface AppCtrlValues {
  view?: string | null,
  info?: string | null,
  warn?: string | null,
  error?: string | null,
}
