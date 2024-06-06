import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TopRightMenu() {

  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("")

  const handleSubmit = () => {
    navigate(`/tim-kiem/${searchKey}`)
  }

  return (
    <div className="flex py-3 gap-3 justify-end items-center">
      <div className="items-center border border-main-brown hidden md:flex py-2 px-4 rounded gap-2 placeholder:text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <path
            fill="#867566"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="focus:outline-none w-[90px] lg:w-auto"
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
          />
        </form>
      </div>
      <Link to={"/dang-nhap"} className=" text-main-brown hidden md:block roboto-medium">
        Đăng nhập
      </Link>
      <Link to={"/dang-ky"} className=" text-main-brown hidden md:block roboto-medium">
        Đăng ký
      </Link>
    </div>
  );
}

export default TopRightMenu;
