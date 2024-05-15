import ProductItem from '../ProductItem';
import { allProduct } from '../../mockData/allProduct';

function Relateproducts() {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5">
            {allProduct.slice(0,4).map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
    );
}

export default Relateproducts;