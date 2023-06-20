import { setPenumpang } from "../reducers/penumpang";

export const Penumpang = (detail) => async (dispatch) => {
  dispatch(setPenumpang(detail));
};
