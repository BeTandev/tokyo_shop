import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState } from "react";
import TitlePage from "../component/TitlePage";

function DangNhap() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("")
  const [errPassword, setErrPassword] = useState("")

  const handleSubmit = () => {
    if (email.length < 1) {
      setErrEmail("Không được bỏ trống email");
    } else if (password < 1) {
      setErrPassword("Không được bỏ trống password");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Đăng nhập" />
        </div>
      </div>
      <div className="mx-auto bg-grey-bg py-14 max-w-[700px] mt-5">
        <div className="uppercase text-4xl text-main-brown text-center">
          Đăng nhập
        </div>
        <div className="mt-5">
          <div className="w-[80%] mx-auto mt-5">
            <input
              type="email"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-3 px-4"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onClick={() => {
                setErrEmail(" ");
              }}
              placeholder="Email"
            />
            {errEmail.length > 0 ? (
              <div className="text-center text-red-500 translate-y-2.5">{errEmail}</div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-5 w-[80%] mx-auto">
            <input
              type="password"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-3 px-4"
              name=""
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onClick={() => {
                setErrPassword(" ");
              }}
              placeholder="Mật khẩu"
            />
            {errPassword.length > 0 ? (
              <div className="text-center text-red-500 translate-y-2.5">{errPassword}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-auto w-[80%] justify-between mt-5">
          <Link to={"/lay-lai-mat-khau"} className="text-green-600">
            Quên mật khẩu
          </Link>
          <div className="text-main-brown">
            <span>Bạn chưa có tài khoản ? </span>
            <Link to={"/dang-ky"} className="hover:underline text-blue-500">
              Đăng ký ngay
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="uppercase block cursor-pointer mx-auto w-[80%] text-center bg-green-500 text-white mt-5 py-4"
          onClick={handleSubmit}
        >
          Đăng nhập
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default DangNhap;
