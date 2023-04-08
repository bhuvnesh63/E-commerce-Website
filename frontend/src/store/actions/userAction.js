import Swal from "sweetalert2";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../../components/constants/userConstants";
import axios from "axios";


// Login
// debugger
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `Sign in successfully...`,
      showConfirmButton: true,
      timer: 5000,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    Swal.fire({
      icon: "error",
      title: "Oops....",
      text: `Invalid email or password`,
      showConfirmButton: true,
      timer: 5000,
    },(error));
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/register`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `Sign up successfully...`,
      showConfirmButton: true,
      timer: 5000,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
    Swal.fire({
      icon: "error",
      title: "Oops....",
      text: `Invalid email or password`,
      showConfirmButton: true,
      timer: 5000,
    },(error));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
