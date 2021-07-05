import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AllCallLogsReducer, callLogReducer } from './reducers/callLogReducer';

//import reducers

// define combined reducer
const reducer = combineReducers({
  AllCallLogs: AllCallLogsReducer
});

//initialized state
let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
