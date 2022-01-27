import {SET_USER} from '../constants/actionTypes';

const initialState = {
  user: undefined,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
