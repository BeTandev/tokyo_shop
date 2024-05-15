import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState } from "react";
import TitlePage from "../component/TitlePage";

function LayLaiMatKhau() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = () => {
    if (email.length < 1) {
      setNotice("Không được bỏ trống email");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Lây lại mật khẩu"/>
        </div>
      </div>
      <div className="mx-auto bg-grey-bg py-14 max-w-[700px] mt-5">
        <div className="uppercase text-4xl text-main-brown text-center">
            Lây lại mật khẩu
        </div>
        <div className="text-center text-main-brown w-[95%] xs:w-[90%] mx-auto text-sm">Chúng tôi sẽ gủi email kích hoạt việc lấy lại mật khẩu.</div>
        <div className="mt-5">
          {notice.length > 0 ? (
            <div className="text-center text-red-500">{notice}</div>
          ) : (
            ""
          )}
          <div className="w-[80%] mx-auto mt-5">
            <input
              type="email"
              className="bg-white border border-main-brown focus:outline-none w-[100%] py-3 px-4"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onClick={() => {
                setNotice(" ");
              }}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-auto w-[80%] justify-between mt-5 text-main-brown">
          <Link to={"/DangNhap"} className="">
            Quay lại
          </Link>
        </div>
        <button
          type="submit"
          className="uppercase block cursor-pointer mx-auto w-[80%] text-center bg-green-500 text-white mt-5 py-4"
          onClick={handleSubmit}
        >
          Gửi
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LayLaiMatKhau;
