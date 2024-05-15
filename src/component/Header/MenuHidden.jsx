import { Link } from "react-router-dom";
import { menuData } from "../../mockData/menuData";
import { useState } from "react";

function MenuHidden() {
  const [hoverMenu, setHoverMenu] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false)

  const handleClick = () => {
    setHoverMenu(!hoverMenu);
  };

  const showMenu = () => {
    setIsShowMenu(!isShowMenu)
  }
  return (
    <div className="">
      <div className="flex md:hidden items-center">
        <div className="basis-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 p-1 cursor-pointer bg-main-green text-white font-semibold"
            onClick={showMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="basis-4/5 items-center border border-main-brown py-2 px-4 rounded gap-2 placeholder:text-xs flex">
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
          <input
            type="text"
            placeholder="Tìm kiếm"
            className=" focus:outline-none w-full"
          />
        </div>
      </div>

      <div className={`mt-5 flex-col gap-2 ${isShowMenu ? "flex" : "hidden"} text-sm roboto-regular`}>
        <div className="uppercase text-base">Trang chủ</div>
        <hr className="bg-main-brown" />
        <div className="uppercase text-base">Giới thiệu</div>
        <hr className="bg-main-brown" />
        <div className="relative">
          <div className="uppercase text-base cursor-pointer" onClick={handleClick}>
            Sản phẩm
          </div>
          <ul
              className={`z-10 ${
                hoverMenu ? "visible" : "hidden"
              } ml-5`}
              aria-labelledby="dropdownDelayButton"
            >
              {menuData.map((item, index) => (
                <div key={index}>
                  <li>
                    <Link
                      to={`${item.link}`}
                      href="#"
                      className="block py-3 text-main-brown hover:text-orange-500 transition-all duration-500 hover:ml-3 dark:hover:bg-gray-600 dark:hover:text-white text-base"
                    >
                      {item.title}
                    </Link>
                  </li>
                  <hr className="bg-main-brown" />
                </div>
              ))}
            </ul>
        </div>
        <hr className="bg-main-brown" />
        <div className="uppercase text-base">Blog</div>
      </div>
    </div>
  );
}

export default MenuHidden;
