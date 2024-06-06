import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import { menuData } from "../mockData/menuData";
import { useEffect, useState } from "react";
import { allProduct } from "../mockData/allProduct";
import { removeAccents } from "../helper/removeAccents";
import ProductItem from "../component/ProductItem";
import Pagination from "../component/AllProductComponent/Pagination"

function SearcghPageParam() {
  const [searchKey, setSearchkey] = useState("");
  const [dataFinal, setDataFinal] = useState([]);
  const [selectPage, setSelectPage] = useState(1)
  const navigate = useNavigate()
  const {key} = useParams()

  const handleSubmit = () => {
    navigate(`/tim-kiem/${searchKey}`)
  };

  useEffect(() => {
    setSearchkey(key)
    const dataAfter = removeAccents(key).toLocaleLowerCase();
    const dataFilted = allProduct.filter((item) =>
      removeAccents(item.title).toLocaleLowerCase().includes(dataAfter)
    );
    setDataFinal(dataFilted);
  }, [key])

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[95%] mx-auto">
          <TitlePage title="Tìm kiếm" />
          <div className="flex flex-col-reverse md:flex-row mt-5 gap-10">
            <div className="basis-1/4">
              <h2 className="text-2xl text-main-brown">Danh mục sản phẩm</h2>
              <hr className="bg-main-brown mt-3" />
              <div className="mt-3">
                {menuData.map((item, index) => (
                  <div key={index} className="">
                    <Link
                      to={"/tat-ca-san-pham"}
                      className="text-base text-main-brown mt-2 block"
                    >
                      {item.title}
                    </Link>
                    <hr className="bg-main-brown mt-3" />
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-3/4">
              <div className="mb-3">
                Kết quả tìm kiếm với từ khóa &quot;{key}&quot;:
              </div>
              <div className="flex gap-10">
                <input
                  type="text"
                  className="w-full focus:outline-none border text-sm py-2 px-4 rounded"
                  placeholder="Nhập từ khóa cần tìm"
                  onChange={(e) => setSearchkey(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-[130px] bg-orange-400 text-white rounded text-sm"
                  onClick={handleSubmit}
                >
                  Tìm kiếm
                </button>
              </div>
              {dataFinal && (<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-5">
                {dataFinal?.slice(6 * (selectPage - 1), 6 * selectPage).map((item) => (
                    <ProductItem key={item.id} item={item} />
                  ))}
              </div>)}
              {dataFinal.length === 0 && (<p>Không có kết quả phù hợp</p>)}
              {dataFinal.length > 0 && <Pagination setSelectPage={setSelectPage} selectPage={selectPage} dataFinal={dataFinal} itemPerPage={8}/>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearcghPageParam;
