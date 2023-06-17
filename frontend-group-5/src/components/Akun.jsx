import React from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { BsBoxArrowRight } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/auth";

export const Akun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
  return (
    <div className="Akun">
      <NavbarBeranda />
      <div className="container-top-akun">
        <p className="akun-bold">Akun</p>
        <div className="container-button-beranda">
          <Button className="bt-beranda-akun me-3">
            <BiArrowBack className="me-3" />
            Beranda
          </Button>
        </div>
      </div>
      <div className="container-bottom-akun">
        <div className="container-bottom-left">
          <div className="bt-menu-akun">
            <AiOutlineEdit
              className="me-2"
              style={{ color: "#7126B5", fontSize: "30px" }}
            />
            Ubah Profil
          </div>
          <div className="bt-menu-akun">
            <CiSettings
              className="me-2"
              style={{ color: "#7126B5", fontSize: "30px" }}
            />
            Pengaturan Akun
          </div>
          <div className="bt-menu-akun" onClick={() => dispatch(logout(navigate))}>
            <BsBoxArrowRight
              className="me-2"
              style={{ color: "#7126B5", fontSize: "30px" }}
            />
            Keluar
          </div>
        </div>
        <div className="container-bottom-right">
          <Card className="card-akun">
            <Card.Body>
              <Card.Title className="title-profil-bold mb-3">
                Ubah Data Profil
              </Card.Title>
              <div className="title-datadiri mb-3">Data Diri</div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-update-profil">
                    Nama Lengkap
                  </Form.Label>
                  <Form.Control type="text" placeholder="fullname" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-update-profil">
                    Nomor Telepon
                  </Form.Label>
                  <Form.Control type="text" placeholder="+62.." />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-update-profil">Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <div className="container-simpan-akun">
                  <Button className="bt-simpan-akun">Simpan</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
