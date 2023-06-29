import axios from "axios";
import { toast } from "react-toastify";
import { setUpdate } from "../reducers/updateuser";

export const update = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/auth/update`,
      data
    );

    //   const { token } = response?.data;

    //   dispatch(setToken(token));
    //   dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    dispatch(setUpdate(response.data));
    console.log(response.data);
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};
