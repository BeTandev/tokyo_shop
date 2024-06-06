import { Link } from "react-router-dom";

function ProductItem(props) {

    const {item} = props

    return (
        <div className="block mt-8 w-full">
            <Link to={`/product/${item.slug}`}><img src={`.${item.image}`} alt="" className="w-full min-h-60 max-h-60 block object-contain" /></Link>
            <Link to={`/product/${item.slug}`} className="text-center block text-lg text-main-brown mt-3">{item.title}</Link>
            {item.price === null ? <div className="text-center text-main-brown font-semibold text-lg italic">Liên hệ</div> : <div className="text-center text-lg text-main-brown font-semibold">Giá {(item.price).toLocaleString("en-US")}đ</div>}
        </div>
    );
}

export default ProductItem;