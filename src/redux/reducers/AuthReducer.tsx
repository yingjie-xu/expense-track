import { LOGIN, LOGOUT } from '../ActionTypes';

export default (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.uid
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}