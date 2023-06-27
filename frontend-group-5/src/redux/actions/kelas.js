import { setKelas, setData, setDataNew } from "../reducers/kelas";

export const kelas = (detail) => async (dispatch) => {
  dispatch(setKelas(detail));
};
export const dataSearch = (data) => async (dispatch) => {
  dispatch(setData(data));
};
export const dataNew = (data) => async (dispatch) => {
  dispatch(setDataNew(data));
};
