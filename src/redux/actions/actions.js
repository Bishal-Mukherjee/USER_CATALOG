import { actionsTypes } from "../constants/actions-types";
export const setUsers = (users) => {
  const { SET_USERS } = actionsTypes;
  return {
    type: SET_USERS,
    payload: users,
  };
};
