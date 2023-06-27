import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Beranda } from "./components/Beranda";
import Notifikasi from "./components/Notifikasi";
import { Akun } from "./components/Akun";
import RiwayatNull from "./pages/w-riwayatOrder/RiwayatNull";
import Riwayat from "./pages/w-riwayatOrder/Riwayat";
import WbiodataPemesanan from "./pages/w-biodata/WbiodataPemesanan";
import WbiodataPemesanan02 from "./pages/w-biodata/WbiodataPemesanan02";
import WPayment from "./pages/w-payment/WPayment";
import DonePayment from "./pages/w-payment/DonePayment";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const angka = 3;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route
            path="/notifikasi"
            element={isLoggedIn ? <Notifikasi /> : <Login />}
          />
          <Route path="/akun" element={isLoggedIn ? <Akun /> : <Login />} />
          <Route
            path="/biodata_pemesanan"
            element={
              isLoggedIn ? (
                <WbiodataPemesanan jumlahPengulangan={angka} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/biodata_pemesanan2"
            element={
              isLoggedIn ? (
                <WbiodataPemesanan02 jumlahPengulangan={angka} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/payment"
            element={isLoggedIn ? <WPayment /> : <Login />}
          />
          <Route
            path="/paymentdone"
            element={isLoggedIn ? <DonePayment /> : <Login />}
          />
          <Route
            path="/riwayat"
            element={isLoggedIn ? <Riwayat /> : <Login />}
          />
          <Route
            path="/riwayatnull"
            element={isLoggedIn ? <RiwayatNull /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
