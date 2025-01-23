import { ADD_TOKEN, DELETE_TOKEN, GET_TOKEN } from "../ActionType";

const initialState = {
  token: ""
};


export function tokenReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TOKEN:        
        return { ...state, token: action.payload };
      case DELETE_TOKEN:
        return { ...state, token: action.payload };
      case GET_TOKEN:
        return {
          ...state,token: state.token};
      default:
        return state;
    }
  }