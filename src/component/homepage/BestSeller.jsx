import { allProduct } from '../../mockData/allProduct';
import ProductItem from '../ProductItem';

function BestSeller() {
    return (
        <div className="container mx-auto mt-10">
        <div className="row w-[95%] xs:w-[90%] mx-auto">
          <h2 className='text-center text-2xl font-medium text-main-brown'>SẢN PHẨM BÁN CHẠY</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {allProduct.slice(0,8).map(item => (
                <ProductItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    );
}

export default BestSeller;