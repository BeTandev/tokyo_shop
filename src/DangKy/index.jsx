import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState } from "react";
import TitlePage from "../component/TitlePage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DangKy() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = () => {
    if (lastName.length < 1) {
      setNotice("Không được bỏ trống họ");
    } else if (firstName.length < 1) {
      setNotice("Không được bỏ trống tên");
    } else if (email.length < 1) {
      setNotice("Không được bỏ trống email");
    } else if (password < 1) {
      setNotice("Không được bỏ trống password");
    } else {
      toast.success('Đã đăng ký thành công', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => { navigate("/"); }, 2000);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Đăng ký"/>
        </div>
      </div>
      <div className="mx-auto bg-grey-bg py-14 max-w-[700px] mt-5">
        <div className="uppercase text-4xl text-main-brown text-center">
          Đăng ký
        </div>
        <div className="mt-5">
          {notice.length > 0 ? (
            <div className="text-center text-red-500">{notice}</div>
          ) : (
            ""
          )}
          <div className="w-[80%] mx-auto mt-5">
            <input
              type="email"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-4 px-6"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onClick={() => {
                setNotice(" ");
              }}
              placeholder="Họ"
            />
          </div>
          <div className="w-[80%] mx-auto mt-5">
            <input
              type="email"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-4 px-6"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              onClick={() => {
                setNotice(" ");
              }}
              placeholder="Tên"
            />
          </div>
          <div className="w-[80%] mx-auto mt-5">
            <input
              type="email"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-4 px-6"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onClick={() => {
                setNotice(" ");
              }}
              placeholder="Email"
            />
          </div>
          <div className="mt-5 w-[80%] mx-auto">
            <input
              type="password"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-4 px-6"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onClick={() => {
                setNotice(" ");
              }}
              placeholder="Mật khẩu"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mx-auto w-[80%] mt-5">
          <div className="text-main-brown">
            <span>Bạn đâ có tài khoản ? </span>
            <Link to={"/dang-nhap"} className="hover:underline text-blue-500">Đăng nhập</Link>
          </div>
        </div>
        <button
          type="submit"
          className="uppercase block cursor-pointer mx-auto w-[80%] text-center bg-green-500 text-white mt-5 py-4"
          onClick={handleSubmit}
        >
          Đăng Ký
        </button>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default DangKy;
