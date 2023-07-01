import { setNotifikasi } from "../reducers/notifikasi";
import axios from "axios";
import { toast } from "react-toastify";

export const getNotifikasi = (value, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/notification`,
      value
    );

    //   const { token } = response?.data;

    //   dispatch(setToken(token));
    //   dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    dispatch(setNotifikasi(response.value));
    console.log(response.value);
    navigate("/notifikasi");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.value?.message);
      return;
    }

    toast.error(error.message);
  }
};
