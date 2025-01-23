import { toast } from "react-toastify";
import axiosInstance from "../../auth/Intercept";
import ConfigUrl from "../../config/ConfigUrl";
import { ADD_TOKEN, DELETE_TOKEN } from "../ActionType";
export const doLogin = (userdetails,navigate) => async (dispatch) => {
  axiosInstance
    .post(ConfigUrl.LOG_IN, userdetails)
    .then((response) => {
      if (response.data.success === true) {
        dispatch({ type: ADD_TOKEN, payload: response.data.token });
        navigate("/private/");
        toast.success("Login successful!");
      }
    })
    .catch((error) => {
      toast.error("Something went wrong!");
    });
};

export const doLogoff = () => async (dispatch) => {
  dispatch({ type: DELETE_TOKEN, payload: "" });
  toast.success("Logout successful!");
};