import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Beranda } from "./components/Beranda";
import Notifikasi from "./components/Notifikasi";
import { Akun } from "./components/Akun";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
