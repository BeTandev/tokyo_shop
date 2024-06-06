import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThanhToanInfo from '../component/FinishOrderComponent/ThanhToanInfo';
import Header from '../component/Header';
import Footer from '../component/Footer';

function FinishOrder() {

    const [dataUser, setDataUser] = useState([])
    const [shipMethod, setShipMethod] = useState('')
    const [dataJson, setDataJson] = useState([])

    useEffect(() => {
        const getData = localStorage.getItem('infoOrder')
        const dataJson = JSON.parse(getData)
        setDataUser(dataJson)
        const getShip = localStorage.getItem('paymentOption')
        setShipMethod(getShip)
        const data = window.localStorage.getItem('productSelected')
        if (data) {
            const convert = JSON.parse(data)
            setDataJson(convert)
        }

        localStorage.removeItem('infoOrder')
        localStorage.removeItem('paymentOption')
        localStorage.removeItem('productSelected')
    }, [])

    const handleSubmit = () => {
        localStorage.removeItem('infoOrder')
        localStorage.removeItem('paymentOption')
        localStorage.removeItem('productSelected')
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="row w-[95%] sm:w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-16 py-10">
                    <div className="basis-3/5">
                        <div className="mt-2 text-lg">Đặt hàng thành công</div>
                        <div className="text-xs text-gray-600">Mã đơn hàng #100015</div>
                        <div className="text-xs text-gray-600">Cám ơn bạn đã mua hàng!</div>
                        <div className="mt-4 border-2 py-2 px-3 rounded">
                            <h4>Thông tin đơn hàng</h4>
                            <div className="text-sm mt-1">Thông tin giao hàng</div>
                            <div className="mt-2 text-xs text-gray-600">{dataUser?.fullname}</div>
                            <div className="text-xs text-gray-600">{dataUser?.phonenumber}</div>
                            <div className="text-xs text-gray-600">{dataUser?.address}</div>
                            <div className="text-xs text-gray-600">{dataUser?.ward}</div>
                            <div className="text-xs text-gray-600">{dataUser?.district}</div>
                            <div className="text-xs text-gray-600">{dataUser?.city}</div>
                            <div className="text-sm mt-2">Phương thức thanh toán</div>
                            <div className="">{shipMethod}</div>
                        </div>
                        <Link to={'/'} className="bg-orange-400 block w-max mx-auto mt-5 text-white py-4 px-5 rounded cursor-pointer text-center text-sm" onClick={handleSubmit}>Tiếp tục mua hàng</Link>
                    </div>
                    <hr className="w-0.5 bg-gray-300 h-[500px] hidden lg:block" />
                    <ThanhToanInfo dataJson={dataJson}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FinishOrder;