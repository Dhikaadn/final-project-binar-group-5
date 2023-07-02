import axios from "axios";
import { setNotifikasi, setToken } from "../reducers/notifikasi";
import { toast } from "react-toastify";

export const getListNotifikasi = (uuidUser) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/notification`,
      {
        params: {
          uuidRequest: uuidUser,
        },
      }
    );

    dispatch(setNotifikasi(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getTokenFirebase = (token) => async (dispatch) => {
  dispatch(setToken(token));
};
