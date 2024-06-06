import { useEffect, useState } from "react";
import Pagination from "../component/AllProductComponent/Pagination";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ProductItem from "../component/ProductItem";
import TitlePage from "../component/TitlePage";
import { allProduct } from "../mockData/allProduct";

function AllProduct() {

  const [selectPage, setSelectPage] = useState(1)
  const [category, setCategory] = useState('')
  const [dataFinal, setDataFinal] = useState([])
  const [sortKey, setSortkey] = useState("")
  const [selectedCategory, setSelectedcategory] = useState(null)

  useEffect(() => {
    setDataFinal(allProduct)

    if (category) {
      const dataAfterFil = allProduct.filter(item => item.category === category)
      setDataFinal(dataAfterFil)
    } else if (category === '') {
      setDataFinal(allProduct)
    }

  }, [category])

  useEffect(() => {
    if (sortKey === "") {
      setDataFinal(allProduct);
    } else {
      const sortedData = [...dataFinal];

      if (sortKey === 'priceAsc') {
        sortedData.sort((a, b) => {
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        });
      } else if (sortKey === 'priceDesc') {
        sortedData.sort((a, b) => {
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        });
      } else if (sortKey === 'nameAsc') {
        sortedData.sort((a, b) => (a.title && b.title) ? a.title.localeCompare(b.title) : 0);
      } else if (sortKey === 'nameDesc') {
        sortedData.sort((a, b) => (a.title && b.title) ? b.title.localeCompare(a.title) : 0);
      }

      setDataFinal(sortedData);
    }
  }, [sortKey]);

  const selectCategory = (x, y) => {
    setCategory(x)
    setSelectedcategory(y)
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Sản phẩm" />
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-start lg:items-center">
            <div className="flex gap-3 items-center mt-5 text-main-brown flex-wrap">
              <h2 className={`cursor-pointer text-2xl ${selectedCategory === 0 ? "text-orange-500" : "text-main-brown"}`} onClick={() => selectCategory("", 0)}>Tất cả sản phẩm</h2>
              <hr className="h-[40px] w-[1px] bg-main-brown" />
              <p className={`cursor-pointer ${selectedCategory === 1 ? "text-orange-500" : "text-main-brown"}`} onClick={() => selectCategory("tra-kho", 1)}>Trà Khô</p>
              <p className={`cursor-pointer ${selectedCategory === 2 ? "text-orange-500" : "text-main-brown"}`} onClick={() => selectCategory("tra-uop", 2)}>Trà Ướp</p>
              <p className={`cursor-pointer ${selectedCategory === 3 ? "text-orange-500" : "text-main-brown"}`} onClick={() => selectCategory("tra-hop", 3)}>Trà Hộp</p>
              <p className={`cursor-pointer ${selectedCategory === 4 ? "text-orange-500" : "text-main-brown"}`} onClick={() => selectCategory("bo-am", 4)}>Bộ Ấm</p>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="">Sắp xếp: </label>
              <select
                name=""
                id=""
                className="border text-sm w-[200px] border-black py-2 px-4 focus:outline-none"
                onChange={(e) => setSortkey(e.target.value)}>
                <option value="">Mặc định</option>
                <option value="priceAsc">Giá tăng dần</option>
                <option value="priceDesc">Giá giảm dần</option>
                <option value="nameAsc">Tên A - Z</option>
                <option value="nameDesc">Tên Z - A</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5">
            {dataFinal.slice((8 * (selectPage - 1)), (8 * selectPage)).map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>

          <Pagination setSelectPage={setSelectPage} selectPage={selectPage} dataFinal={dataFinal} itemPerPage={8} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProduct;
