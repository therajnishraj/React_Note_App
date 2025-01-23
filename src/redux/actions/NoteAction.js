import {
  ADD_NOTE,
  GET_ALL_NOTES,
  DELETE_NOTE,
  UPDATE_NOTE,
  SET_LOADING,
  SET_ERROR,
} from "../ActionType";
import axiosInstance from "../../auth/Intercept";
import ConfigUrl from "../../config/ConfigUrl";
import { toast } from "react-toastify";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const addNote = (noteData) => async (dispatch) => {
  dispatch(setLoading(true));
  axiosInstance
    .post(ConfigUrl.ADD_NOTE, noteData)
    .then((response) => {
      toast.success("Note added successfully!");
      dispatch({ type: ADD_NOTE, payload: response.data });
      dispatch(setLoading(false));
    })
    .catch((error) => {
      toast.error("Technical Error..Couldn't be added note!");
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    });
};

export const getAllNotes = () => async (dispatch) => {
  dispatch(setLoading(true));
  axiosInstance
    .get(ConfigUrl.GET_NOTES_LIST)
    .then((response) => {
      dispatch({ type: GET_ALL_NOTES, payload: response.data });
      dispatch(setLoading(false));
    })
    .catch((error) => {
      toast.error("Something went wrong while fatching note list!");
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    });
};

export const deleteNote = (noteId) => async (dispatch) => {
  dispatch(setLoading(true));
  axiosInstance
    .delete(`${ConfigUrl.DELETE_NOTE_BY_ID}/${noteId}`)
    .then((response) => {
      toast.success("Note deleted successfully!");
      dispatch({ type: DELETE_NOTE, payload: noteId });
      dispatch(setLoading(false));
    })
    .catch((error) => {
      toast.error("Something went wrong while delete the note");
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    });
};

export const updateNote = (note) => async (dispatch) => {
  dispatch(setLoading(true));
  axiosInstance
    .put(`${ConfigUrl.UPDATE_NOTE_BY_ID}/${note.id}`, note)
    .then((response) => {
      toast.success("Note updated successfully!");
      dispatch({ type: UPDATE_NOTE, payload: response.data });
      dispatch(setLoading(false));
    })
    .catch((error) => {
      toast.error("Error ..Couldn't updated!");
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    });
};
