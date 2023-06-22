import axios from "axios";
import { setDetail } from "../reducers/detail";
import { toast } from "react-toastify";

export const getDetail = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://backend-binar-final-project-production.up.railway.app/api/v1/detail-information`,
      {
        params: {
          airlineCode: data.airlineCode,
          flightClass: data.flightClass,
          adultPassenger: data.adultPassenger,
          childrenPassenger: data.childrenPassenger,
          babyPassenger: data.babyPassenger,
        },
      }
    );

    console.log(response.data);
    dispatch(setDetail(response.data));

    navigate("/biodata_pemesanan");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
