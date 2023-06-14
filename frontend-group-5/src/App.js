import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Beranda } from "./components/Beranda";
import Notifikasi from "./components/Notifikasi";
import { Akun } from "./components/Akun";
import RiwayatNull from './pages/w-riwayatOrder/RiwayatNull'
import Riwayat from './pages/w-riwayatOrder/Riwayat'
import WbiodataPemesanan from './pages/w-biodata/WbiodataPemesanan'
import WbiodataPemesanan02 from './pages/w-biodata/WbiodataPemesanan02'
import WPayment from './pages/w-payment/WPayment'
import DonePayment from './pages/w-payment/DonePayment'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/akun" element={<Akun />} />
          <Route path='/biodata_pemesanan' element={<WbiodataPemesanan/>}/>
          <Route path='/biodata_pemesanan2' element={<WbiodataPemesanan02/>}/>
          <Route path='/payment' element={<WPayment/>}/>
          <Route path='/paymentdone' element={<DonePayment/>}/>
          <Route path='/riwayat' element={<Riwayat/>}/>
          <Route path='/riwayatnull' element={<RiwayatNull/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
