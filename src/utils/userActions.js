export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (userDetail) => {
  return {
    type: SAVE_USER_DATA,
    payload: userDetail
  };
};

export const SAVE_USER_DETAIL = 'SAVE_USER_DETAIL';

export const saveUserDetail = (userDetail) => {
  return {
    type: SAVE_USER_DETAIL,
    payload: userDetail
  };
};
