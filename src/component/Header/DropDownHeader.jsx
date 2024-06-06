import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "../../mockData/menuData";

function DropDownHeader(props) {

  const {pageSelected, setPageSelected} = props

  const navigate = useNavigate();
  const [hoverMenu, setHoverMenu] = useState(false);

  const handleMouseEnter = () => {
    setHoverMenu(true);
  };

  const handleMouseLeave = () => {
    setHoverMenu(false);
  };

  const handleTrans = () => {
    navigate("/tat-ca-san-pham");
    setPageSelected(2)
  };

  return (
    <div className="flex-col relative items-center gap-1" onClick={handleTrans}>
      <button
        className={`${pageSelected === 2 ? "text-orange-500" : "text-main-brown"} focus:outline-none rounded-lg text-center inline-flex items-center hover:text-orange-400 md:text-base lg:text-lg`}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sản phẩm{" "}
        <svg
          className="w-2.5 h-2.5 ms-1 mt-0.5 ml-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`z-10 ${
          hoverMenu ? "visible" : "invisible hidden"
        } bg-white divide-y divide-gray-100 rounded-lg absolute shadow w-56 dark:bg-gray-700`}
      >
        <ul className="py-3 px-6 text-gray-700 dark:text-gray-200 roboto-regular text-base">
          {menuData.map((item, index) => (
            <div key={index}>
              <li>
                <Link
                  to={'/tat-ca-san-pham'}
                  className="block py-3 text-main-brown hover:text-orange-500 transition-all duration-300 hover:ml-3 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
              <hr className="bg-main-brown" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDownHeader;
