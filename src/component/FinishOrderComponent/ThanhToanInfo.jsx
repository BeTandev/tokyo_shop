import { useEffect, useState } from "react"
import ThanhToanItem from "./ThanhToanItem"

function ThanhToanInfo(props) {

    const {dataJson} = props

    const [totalPriceProducts, setTotalPriceproducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0
        for(let i = 0; i < dataJson.length; i++){
            total += dataJson[i].price * dataJson[i].weightOrder;
        }
        setTotalPriceproducts(total)
    }, [dataJson])

    useEffect(() => {
        let total = 0
        for(let i = 0; i < dataJson.length; i++){
            total += dataJson[i].price * dataJson[i].amount;
        }
        setTotalPrice(total)
    }, [dataJson])

    return (
        <div className="basis-2/5">
            {dataJson?.map((item) => <ThanhToanItem key={item.id} dataJson={item} />)}
            <hr className="mt-5" />
            <div className="flex justify-between mt-5 gap-3">
                <input type="text" className=" focus:outline-none border-2 border-gray-400 py-2 px-3 rounded placeholder:text-xs placeholder:text-gray-600 text-xs basis-9/12" placeholder="Mã giảm giá" />
                <div className=" bg-gray-300 font-medium text-white flex cursor-pointer items-center justify-center text-xs px-4 rounded basis-3/12 text-center">Sử dụng</div>
            </div>
            <hr className="mt-3" />
            <div className="flex mt-5 justify-between">
                <div className="text-xs font-medium">Tạm tính</div>
                <div className="text-xs">{totalPrice.toLocaleString("en-US")}đ</div>
            </div>
            <div className="flex mt-2 justify-between">
                <div className="text-xs font-medium">Phí vận chuyển</div>
                <div className="text-xs">----</div>
            </div>
            <hr className="mt-5" />
            <div className="flex mt-5 justify-between">
                <div className="text-sm">Tổng cộng</div>
                <div className="flex gap-2 items-center">
                    <div className="text-sm">VND</div>
                    <div className="font-medium text-lg">{totalPrice.toLocaleString("en-US")}đ</div>
                </div>
            </div>
        </div>
    );
}

export default ThanhToanInfo;