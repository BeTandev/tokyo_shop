import { Link } from "react-router-dom";
import DropDownHeader from "./DropDownHeader";
import { useEffect, useState } from "react";

function PageSelect(props) {

  const {changeData, setChangeData} = props

  const [productData, setProductData] = useState([])
  const [pageSelected, setPageSelected] = useState(null)
  const [amountProducts, setAmountProducts] = useState(0)

  useEffect(() => {
    let totalPrice = 0;

    for (const item of productData) {
      if (item.amount !== null) {
        totalPrice += item.amount;
      }
    }

    setAmountProducts(totalPrice)
  }, [productData])

  const handleHl = (x) => {
    sessionStorage.setItem("savedPage", x)
  }

  useEffect(() => {
    const productList = localStorage.getItem("productSelected")
    const productListJson = JSON.parse(productList)
    setProductData(productListJson)
    if(setChangeData){
      setChangeData(false)
    }
}, [changeData])

  useEffect(() => {
    const pageSaved = sessionStorage.getItem("savedPage")
    const transType = Number(pageSaved)
    setPageSelected(transType)
  }, [])

  return (
    <div className="hidden md:flex justify-end gap-5 text-lg font-serif text-main-brown items-center mt-3">
      <Link
        to={"/"}
        className={`${pageSelected === 0 ? "text-orange-500" : "text-main-brown"} hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200`}
        onClick={() => handleHl(0)}
      >
        Trang chủ
      </Link>
      <Link
        to={"/ve-chung-toi"}
        className={`${pageSelected === 1 ? "text-orange-500" : "text-main-brown"} hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200`}
        onClick={() => handleHl(1)}
      >
        Giới thiệu
      </Link>

      <DropDownHeader pageSelected={pageSelected} setPageSelected={handleHl} />
      <Link
        to={"/blog"}
        className={`${pageSelected === 3 ? "text-orange-500" : "text-main-brown"} hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200`}
        onClick={() => handleHl(3)}
      >
        Blog
      </Link>
      <Link
        to={"/gio-hang"}
        className={`${pageSelected === 4 ? "text-orange-500" : "text-main-brown"} hover:text-orange-400 md:text-base lg:text-lg transition-all duration-200 flex items-center gap-1`}
        onClick={() => handleHl(4)}
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
        <div>Giỏ hàng ({amountProducts})</div>
      </Link>
    </div>
  );
}

export default PageSelect;
