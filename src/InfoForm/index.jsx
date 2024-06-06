import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TitlePage from "../component/TitlePage";

function InfoForm() {

    const navigate = useNavigate()

    const [fullname, setFullname] = useState('')
    const [checkFullname, setCheckFullname] = useState(false)
    const [phonenumber, setPhonenumber] = useState('')
    const [checkPhonenumber, setCheckPhonenumber] = useState(false)
    const [address, setAddress] = useState('')
    const [checkAddress, setCheckAddress] = useState(false)
    const [ward, setWard] = useState('')
    const [checkWard, setCheckWard] = useState(false)
    const [district, setDistrict] = useState('')
    const [checkDistrict, setCheckDistrict] = useState(false)
    const [city, setCity] = useState('')
    const [checkCity, setCheckCity] = useState(false)
    const [infomationOrder, setInformationOrder] = useState([])

    useEffect(() => {
        const getInfo = {
            fullname,
            phonenumber,
            address,
            ward,
            district,
            city
        }

        setInformationOrder(getInfo)
    }, [fullname, phonenumber, address, ward, district, city])

    const handleSubmit = () => {
        if (!fullname) return setCheckFullname(true)
        if (phonenumber.length < 8 || phonenumber.length > 15) return setCheckPhonenumber(true)
        if (!address) return setCheckAddress(true)
        if (!ward) return setCheckWard(true)
        if (!district) return setCheckDistrict(true)
        if (!city) return setCheckCity(true)

        localStorage.setItem('infoOrder', JSON.stringify(infomationOrder))
        navigate("/don-hang-hoan-tat")
    }

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="row w-[95%] xs:w-[90%] mx-auto">
                    <TitlePage title="Điền thông tin giao hàng"/>
                    <div className="sm:w-[500px] mx-auto mt-10 text-xl">Thông tin giao hàng</div>
                    <div className="flex flex-col sm:w-[500px] mx-auto">
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkFullname ? 'visible' : 'invisible'}`}>*Họ và tên không được để trống</div>
                        <input type="text" className={`block w-full py-3 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Họ và tên" onChange={(e) => { setFullname(e.target.value) }} onClick={() => { setCheckFullname(false) }} />
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkPhonenumber ? 'visible' : 'invisible'}`}>*Số điện thoại phải từ 8 đến 15 số</div>
                        <input type="number" name="" id="" className={`3lock w-full py-2 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Số điện thoại" onChange={(e) => { setPhonenumber(e.target.value) }} onClick={() => { setCheckPhonenumber(false) }} />
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkAddress ? 'visible' : 'invisible'}`}>*Địa chỉ không được bỏ trống</div>
                        <input type="text" className={`block w-full py-3 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Địa chỉ" onChange={(e) => { setAddress(e.target.value) }} onClick={() => { setCheckAddress(false) }} />
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkWard ? 'visible' : 'invisible'}`}>*Phường/Xã không được bỏ trống</div>
                        <input type="text" className={`block w-full py-3 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Phường/Xã" onChange={(e) => { setWard(e.target.value) }} onClick={() => { setCheckWard(false) }} />
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkDistrict ? 'visible' : 'invisible'}`}>*Quận/Huyện không được bỏ trống</div>
                        <input type="text" className={`block w-full py-3 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Quận/Huyện" onChange={(e) => { setDistrict(e.target.value) }} onClick={() => { setCheckDistrict(false) }} />
                        <div className={`text-red-500 text-[10px] relative mt-2 ${checkCity ? 'visible' : 'invisible'}`}>*Thành phố không được bỏ trống</div>
                        <input type="text" className={`block w-full py-3 px-4 placeholder:text-xs rounded-sm text-xs focus:outline-none border-gray-400 focus:border-blue-500 border-2 transition-all duration-400`} placeholder="Thành phố" onChange={(e) => { setCity(e.target.value) }} onClick={() => { setCheckCity(false) }} />
                    </div>
                    <div className="flex flex-col xs:flex-row mt-4 justify-between text-xs items-center gap-5">
                        <Link to={'/gio-hang'} className="text-blue-500 text-center text-sm">Giỏ hàng</Link>
                        <div className=" bg-orange-400 text-white py-4 px-5 rounded cursor-pointer text-center text-sm" onClick={handleSubmit}>Hoàn tất đơn hàng</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default InfoForm;