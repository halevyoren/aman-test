import axios from 'axios';

import {
  GET_ALL_LOGS_REQUEST,
  GET_ALL_LOGS_SUCCESS,
  GET_ALL_LOGS_FAIL
} from '../constants/callLogConstants';

// Get all call logs
export const getAllLogs = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_LOGS_REQUEST
    });

    const { data } = await axios.get(`/logs/`);

    dispatch({
      type: GET_ALL_LOGS_SUCCESS,
      payload: { data }
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_LOGS_FAIL,
      payload: error.message
    });
  }
};
