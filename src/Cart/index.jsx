import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TitlePage from "../component/TitlePage";
import CartItem from "../component/Cart/CartItem";
import { Link } from "react-router-dom";

function Cart() {

    const [productData, setProductData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [changeData, setChangeData] = useState(false)

    useEffect(() => {
        const productList = localStorage.getItem("productSelected")
        const productListJson = JSON.parse(productList)
        setProductData(productListJson)
    }, [])

    useEffect(() => {
        let total = 0
        for(let i = 0; i < productData?.length; i++){
            total += productData[i].price * productData[i].amount;
        }
        setTotalPrice(total)
    }, [productData, changeData])

    return (
        <div>
            <Header changeData={changeData} setChangeData={setChangeData}/>
            <div className="container mx-auto">
                <div className="row w-[95%] xs:w-[90%] mx-auto">
                    <TitlePage title="Giỏ hàng của bạn" />
                    {!productData && <div className="mt-10 text-xl">Giỏ hàng của bạn hiện tại dang trống. Hãy chọn sản phẩm bạn muốn <Link to={'/tat-ca-san-pham'}>tại đây</Link></div>}
                    <div className="flex flex-col mt-5">
                        {productData?.map((item, index) => <CartItem key={index} changeData={changeData} setChangeData={setChangeData} item={item} setProductData={setProductData} productData={productData}/>)}
                    </div>
                    <div className="flex flex-col items-end gap-2 mt-10">
                        <div className="text-2xl font-medium text-main-green">Tổng tiền: {totalPrice.toLocaleString("en-US")}đ</div>
                        {productData ? <Link to={'/phuong-thuc-thanh-toan'} className=" bg-orange-400 text-white py-3 px-7 hover:bg-transparent hover:text-orange-400 border border-orange-400 transition-all duration-300 mt-5">Tiếp theo</Link> : ""}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;