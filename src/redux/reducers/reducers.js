import { actionsTypes } from "../constants/actions-types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState.users, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
