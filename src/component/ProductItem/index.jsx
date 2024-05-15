function ProductItem(props) {

    const {item} = props

    return (
        <div className="basis-1/4 mt-8">
            <img src={item.image} alt="" className="w-full min-h-60 max-h-60 block" />
            <div className="text-center text-lg text-main-brown mt-3">{item.title}</div>
            {item.price === null ? <div className="text-center text-main-brown font-semibold text-lg italic">Liên hệ</div> : <div className="text-center text-lg text-main-brown font-semibold">Giá {(item.price).toLocaleString("en-US")}đ</div>}
        </div>
    );
}

export default ProductItem;