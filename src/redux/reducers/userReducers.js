import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(FETCH_USER);
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
      };

    case FETCH_USER_SUCCESS:
      console.log(FETCH_USER_SUCCESS, action.payload);
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case FETCH_USER_FAILED:
      console.log(FETCH_USER_FAILED, action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;
