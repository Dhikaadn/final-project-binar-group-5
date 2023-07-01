import axios from "axios";
import {
  setIsLoggedIn,
  setToken,
  setUser,
  setUuidUser,
} from "../reducers/auth";
import { toast } from "react-toastify";

export const login = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;
    const { uuidUser } = response?.data?.data;
    console.log(response.data);
    dispatch(setToken(token));
    dispatch(setUuidUser(uuidUser));
    dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/auth/signup`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    navigate("/login");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch(setToken(null));
  dispatch(setIsLoggedIn(false));
  dispatch(setUser(null));

  // redirect to home
  navigate("/");
};

export const googleLogin = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};
