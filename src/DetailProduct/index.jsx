import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import { useParams } from "react-router-dom";
import { allProduct } from "../mockData/allProduct";
import ProductInfo from "../component/DetailProductComponent/ProductInfo";
import Relateproducts from "../component/DetailProductComponent/Relateproducts";
import InfoProduct from "../component/AllProductComponent/InfoProduct";

function DetailProduct() {

  const { slug } = useParams();
  const [dataProduct, setDataProduct] = useState()
  const [selectInfo, setSelectInfo] = useState(0)

  useEffect(() => {
    const dataFilted = allProduct.filter(item => item.slug === slug)
    setDataProduct(dataFilted)
  }, [slug])


  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          {dataProduct && <TitlePage title={dataProduct[0].title} />}
          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="basis-3/5 flex gap-4">
              <div className="">
                {dataProduct && <img src={dataProduct[0]?.image} alt="" className="w-20 h-20" />}
              </div>
              <div className="">
                {dataProduct && <img
                  src={dataProduct[0]?.image}
                  alt=""
                  className="max-h-[500px]"
                />}
              </div>
            </div>
            <InfoProduct dataProduct={dataProduct}/>
          </div>
          <div className="flex uppercase text-lg gap-3 items-center mt-5">
            <div className={`tracking-wider cursor-pointer ${selectInfo === 0 ? "before:content-[' '] before:bg-black before:w-full before:h-[1px] relative before:absolute before:bottom-[-10px]": ""}`} onClick={() => setSelectInfo(0)}>Mô tả sản phẩm</div>
            <hr className="w-[1px] h-[20px] bg-gray-500"/>
            <div className={`tracking-wider cursor-pointer ${selectInfo === 1 ? "before:content-[' '] before:bg-black before:w-full before:h-[1px] relative before:absolute before:bottom-[-10px]": ""}`} onClick={() => setSelectInfo(1)}>Sản phẩm liên quan</div>
          </div>
          {selectInfo === 0 && <ProductInfo />}
          {selectInfo === 1 && <Relateproducts />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
