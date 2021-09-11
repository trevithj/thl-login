import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appControl from '../app/appControl';
import user from './user';

function actionType(state=null, action) {
  return action.type; //handy for debugging
};

const rootReducer = combineReducers({
  actionType,
  appControl,
  user,
});

export default rootReducer;

export const createAppStore = () => createStore(rootReducer, applyMiddleware(thunk));
