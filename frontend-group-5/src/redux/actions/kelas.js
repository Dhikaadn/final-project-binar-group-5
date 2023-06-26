import { setKelas } from "../reducers/kelas";

export const kelas = (detail) => async (dispatch) => {
  dispatch(setKelas(detail));
};
