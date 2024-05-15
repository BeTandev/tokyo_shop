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
  const [sortKey, setSortkey] = useState('')
  
  useEffect(() => {
    setDataFinal(allProduct)

    if(category){
        const dataAfterFil = allProduct.filter(item => item.category === category)
        setDataFinal(dataAfterFil)
    } else if(category === ''){
        setDataFinal(allProduct)
    }

  }, [category])

  useEffect(() => {
    if(sortKey === 'priceAsc'){
        const dataAfterFil = dataFinal.sort((a, b) => b.price - a.price);
        setDataFinal(dataAfterFil)
    } else if(sortKey === 'priceDesc'){
        const dataAfterFil = dataFinal.sort((a, b) => a.price - b.price);
        setDataFinal(dataAfterFil)
    } else if(sortKey === 'nameAsc'){
        const dataAfterFil = dataFinal.sort((a, b) => (a.title && b.title) ? b.title.localeCompare(a.title) : 0);
        setDataFinal(dataAfterFil)
    } else if(sortKey === 'nameDesc'){
        const dataAfterFil = dataFinal.sort((a, b) => (a.title && b.title) ? a.title.localeCompare(b.title) : 0);
        setDataFinal(dataAfterFil)
    } else {
        setSortkey("")
    }
  }, [sortKey])

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <TitlePage title="Sản phẩm" />
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-start lg:items-center">
            <div className="flex gap-3 items-center mt-5 text-main-brown flex-wrap">
              <h2 className="text-2xl cursor-pointer" onClick={() => setCategory('')}>Tất cả sản phẩm</h2>
              <hr className="h-[40px] w-[1px] bg-main-brown" />
              <div className="cursor-pointer" onClick={() => setCategory("tra-kho")}>Trà Khô</div>
              <div className="cursor-pointer" onClick={() => setCategory("tra-uop")}>Trà Ướp</div>
              <div className="cursor-pointer" onClick={() => setCategory("tra-hop")}>Trà Hộp</div>
              <div className="cursor-pointer" onClick={() => setCategory("bo-am")}>Bộ Ấm</div>
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

          <Pagination setSelectPage={setSelectPage} selectPage={selectPage} dataFinal={dataFinal} itemPerPage={8}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProduct;
