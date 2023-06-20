import axios from "axios";
import { setListPenerbangan } from "../reducers/search";
import { toast } from "react-toastify";

export const getListPenerbangan = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://backend-binar-final-project-production.up.railway.app/api/v1/schedule/search`,
      {
        params: {
          depDate: data.formattedDate,
          depAirport: data.buttonText1,
          arrAirport: data.buttonText2,
          seatClass: data.seatClass.nama,
        },
      }
    );

    console.log(response.data.data);
    dispatch(setListPenerbangan(response.data.data));

    navigate("/beranda");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
