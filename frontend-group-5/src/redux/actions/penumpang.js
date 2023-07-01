import { setPenumpang, setDetailPenumpang } from "../reducers/penumpang";

export const Penumpang = (detail) => async (dispatch) => {
  dispatch(setPenumpang(detail));
};

export const DetailPenumpang = (penumpang) => async (dispatch) => {
  dispatch(setDetailPenumpang(penumpang));
};
