import {
  setBiodataPemesan,
  setBiodataPenumpang,
} from "../reducers/formbiodata";

export const BiodataPemesan = (dataPemesan, navigate) => async (dispatch) => {
  dispatch(setBiodataPemesan(dataPemesan));
  navigate("/biodata_pemesanan2");
};

export const BiodataPenumpang = (formData, navigate) => async (dispatch) => {
  dispatch(setBiodataPenumpang(formData));
  navigate("/biodata_pemesanan2");
};
