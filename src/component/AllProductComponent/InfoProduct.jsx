import { useState } from "react";
import _ from "lodash";
import 'react-toastify/dist/ReactToastify.css';
import Notice from "../Notice";

function InfoProduct(props) {
  const { dataProduct, setChangeData } = props;
  const [amount, setAmount] = useState(1);
  const [showNotice, setShowNotice] = useState(false)

  const handleAddProduct = () => {
    const getData = localStorage.getItem("productSelected");
    if (getData) {
      const dataJson = JSON.parse(getData);
      Object.assign(dataProduct[0], { amount: Number(amount) });

      let checkArray = true
      _.find(dataJson, function (obj) {
        if (obj.id === dataProduct[0].id) {
          _.update(dataProduct[0], 'amount', function (n) {
            return obj.amount + Number(n)
          })
          return checkArray = true
        } else {
          return checkArray = false
        }
      })

      if (checkArray) {
        const dataAfterFil = dataJson.filter(item => item.id !== dataProduct[0].id)
        const dataPrepare = dataAfterFil.concat(dataProduct);
        localStorage.setItem("productSelected", JSON.stringify(dataPrepare));
      } else {
        const dataPrepare = dataJson.concat(dataProduct);
        localStorage.setItem("productSelected", JSON.stringify(dataPrepare));
      }
    } else {
      let data = [];
      Object.assign(dataProduct[0], { amount: Number(amount) });
      const dataPrepare = data.concat(dataProduct);
      localStorage.setItem("productSelected", JSON.stringify(dataPrepare));
    }

    setChangeData(true)
    setShowNotice(true)
  };

  return (
    <div className="basis-2/5">
      {dataProduct && (
        <h2 className="text-2xl font-medium text-main-brown">
          {dataProduct[0]?.title}
        </h2>
      )}
      <hr className="bg-main-brown mt-4 h-0.5" />
      {dataProduct && dataProduct[0]?.price !== null ? (
        <div className="text-main-green mt-4 text-xl">
          {dataProduct[0].price.toLocaleString("en-US")}₫
        </div>
      ) : (
        <div className=" text-main-green font-medium italic mt-4">Liên hệ</div>
      )}
      <div className="text-sm mt-4 text-main-brown">
        Trà cành là trà được làm từ cành của các chồi non. Đặc điểm của kuki-cha
        là có mùi hương nhẹ đặc biệt và vị ngọt. “Kuki” trong tiếng Nhật nghĩa
        là “thân” hay “cành”. Hoji-cha là trà (như sencha, bancha,...)
      </div>
      <hr className="bg-main-brown mt-4 h-0.5" />
      <div className="flex mt-6 gap-5 items-center">
        <label htmlFor="" className="text-main-brown">
          Số lượng:{" "}
        </label>
        <input
          type="number"
          className="border border-main-brown focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-1 px-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex flex-col xs:flex-row  mt-6 gap-3">
        {dataProduct && dataProduct[0].price !== null ? (
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-orange-400 text-white py-2 px-6 justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span>Thêm vào giỏ hàng</span>
          </button>
        ) : (
          ""
        )}
        <button className=" bg-main-green text-white px-3 py-2 font-medium">
          Gọi ngay 0963613536
        </button>
      </div>
      <hr className="bg-main-brown mt-4" />
      <Notice showNotice={showNotice} setShowNotice={setShowNotice} content="Đã đặt hàng thành công"/>
    </div>
  );
}

export default InfoProduct;
