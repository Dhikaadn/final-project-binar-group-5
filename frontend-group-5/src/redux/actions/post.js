import axios from "axios";
import { toast } from "react-toastify";
import { setPosts } from "../reducers/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://binar-backend-final-project-production.up.railway.app/api/v1/waktu`
    );
    dispatch(setPosts(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
