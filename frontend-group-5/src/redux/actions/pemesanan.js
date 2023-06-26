import axios from "axios";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth";
import { toast } from "react-toastify";
import { setPemesanan } from "../reducers/pemesanan";

export const pesan = (data, config, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://backend-binar-final-project-production.up.railway.app/api/v1/booking`,
      data,
      config
    );

    //   const { token } = response?.data;

    //   dispatch(setToken(token));
    //   dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    dispatch(setPemesanan(response.data));
    console.log(response.data);
    navigate("/payment");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};
