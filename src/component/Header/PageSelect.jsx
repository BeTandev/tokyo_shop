import { Link } from "react-router-dom";
import DropDownHeader from "./DropDownHeader";

function PageSelect() {
  return (
    <div className="hidden md:flex justify-end gap-3 text-lg font-serif text-main-brown items-center">
      <Link
        to={"/"}
        className="hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200"
      >
        Trang chủ
      </Link>
      <Link
        to={"/"}
        className="hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200"
      >
        Giới thiệu
      </Link>

      <DropDownHeader />
      <Link
        to={"/"}
        className="hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200"
      >
        Blog
      </Link>
      <Link
        to={"/"}
        className="hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200 flex items-center gap-1 border-2 py-2 px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <div>Giỏ hàng (0)</div>
      </Link>
    </div>
  );
}

export default PageSelect;
