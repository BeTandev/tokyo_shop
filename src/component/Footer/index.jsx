import { Link } from "react-router-dom";
import ContactHeader from "../Header/ContactHeader";

function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div className="container mx-auto mt-10">
        <div className="row w-[95%] xs:w-[90%] mx-auto flex gap-3 py-10 md:flex-nowrap flex-wrap justify-between">
          <div className="basis-10/12 xs:basis-8/12 md:basis-4/12">
            <h4 className="text-2xl">Theo dõi bản tin</h4>
            <div className="flex mt-3 gap-1">
              <input type="email" className="py-1 px-3 border border-black rounded w-[70%]" placeholder="Nhập Email:"/>
              <button type="submit" className=" bg-orange-400 text-white px-3 text-sm rounded w-[25%]">Đăng ký</button>
            </div>
            <div className="text-sm mt-3 text-slate-700">
              Nhận được những thông tin mới nhất từ website
            </div>
          </div>
          <div className="basis-3/12 mt-3 md:mt-0">
            <h4 className="text-2xl">Liên hệ</h4>
            <div className="text-sm mt-3">
              P214,B3, Ngõ 118 , Nguyễn Khánh Toàn, Cầu Giấy,Hà Nội
            </div>
            <div className="text-sm mt-2">0963613536</div>
            <div className="text-sm mt-2">songvangvietnam@gmail.com</div>
          </div>
          <div className="flex flex-col basis-5/12 xs:basis-3/12 md:basis-2/12 gap-3">
            <h4 className="text-2xl mt-3 md:mt-0">Hỗ trợ</h4>
            <Link to={"/"} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Tìm kiếm
            </Link>
            <Link to={"/"} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Giới thiệu
            </Link>
            <Link to={"/"} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Hướng dẫn
            </Link>
            <Link to={"/"} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Chính sách
            </Link>
          </div>
          <div className="basis-3/12 mt-3 md:mt-0">
            <h4 className="text-2xl mb-5">Kết Nối Với Chúng Tôi</h4>
            <ContactHeader />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
