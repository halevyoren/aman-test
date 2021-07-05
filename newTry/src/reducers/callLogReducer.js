import {
  GET_ALL_LOGS_REQUEST,
  GET_ALL_LOGS_SUCCESS,
  GET_ALL_LOGS_FAIL
} from '../constants/callLogConstants';

export const AllCallLogsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_LOGS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        logs: action.payload
      };
    case GET_ALL_LOGS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const callLogReducer = (state = {}, action) => {
  switch (action.type) {
  }
};
