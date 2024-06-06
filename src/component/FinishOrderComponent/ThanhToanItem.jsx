function ThanhToanItem(props) {

    const {dataJson} = props

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
                <img src={`.${dataJson.image}`} alt="" className="rounded w-20 h-20 object-contain"></img>
                <div className="flex flex-col">
                    <div className="text-xs font-medium">{dataJson.title}</div>
                    <div className="text-xs font-light">Số lượng: {dataJson.amount}</div>
                </div>
            </div>
            <div className="text-xs">{(dataJson.amount * dataJson.price).toLocaleString("en-US")}đ</div>
        </div>
    );
}

export default ThanhToanItem;