import axios from "axios";
import { setListRiwayat } from "../reducers/riwayat";
import { toast } from "react-toastify";

export const getListRiwayat = (uuidUser) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/history`,
      {
        params: {
          uuidRequest: uuidUser,
        },
      }
    );

    dispatch(setListRiwayat(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
