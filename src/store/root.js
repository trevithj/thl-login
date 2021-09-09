import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appControl from '../app/appControl';

function actionType(state=null, action) {
  return action.type; //handy for debugging
};

const rootReducer = combineReducers({
  actionType,
  appControl,
});

export default rootReducer;

export const createAppStore = () => createStore(rootReducer, applyMiddleware(thunk));
