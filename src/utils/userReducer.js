import { SAVE_USER_DATA, SAVE_USER_DETAIL } from './userActions';

const initialState = {
  userData: null,
  userDetail: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    case SAVE_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
