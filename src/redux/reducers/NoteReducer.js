import {
    ADD_NOTE,
    GET_ALL_NOTES,
    DELETE_NOTE,
    UPDATE_NOTE,
    SET_LOADING,
    SET_ERROR,
  } from "../ActionType";
  
  const initialState = {
    notes: [],
    loading: false,
    error: null,
  };
  
  export function notesReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_NOTE:        
        return { ...state, notes: [...state.notes, action.payload] };
      case GET_ALL_NOTES:
        return { ...state, notes: action.payload };
      case DELETE_NOTE:
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case UPDATE_NOTE:
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? action.payload : note
          ),
        };
      case SET_LOADING:
        return { ...state, loading: action.payload };
      case SET_ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
  