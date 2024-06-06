import { useEffect, useState } from 'react';
import _ from "lodash";

function CartItem(props) {

    const { item, setProductData, productData, setChangeData, changeData } = props

    const [amount, setAmount] = useState()

    useEffect(() => {
        setAmount(item.amount)
    }, [item])

    const handleDelete = () => {
        const dataFilted = productData.filter(product => product.id !== item.id)
        localStorage.setItem("productSelected", JSON.stringify(dataFilted))
        setProductData(dataFilted)
    }

    const handleDescrease = () => {
        if (amount > 1  ) {
            setAmount(amount - 1)
            _.update(item, 'amount', function(){
                return amount - 1
            })
            _.find(productData, function(obj) {
                if(obj.id === item.id){
                    let index = obj.id
                  _.update(productData[index], '', function(){
                    return item
                  })
                }
              })
    
            setChangeData(!changeData)
            localStorage.setItem("productSelected", JSON.stringify(productData))
            setProductData(productData)
        }
    }

    const handleIncrease = () => {
        setAmount(Number(amount) + 1)
        _.update(item, 'amount', function(){
            return amount + 1
        })
        _.find(productData, function(obj) {
            if(obj.id === item.id){
                let index = obj.id
              _.update(productData[index], '', function(){
                return item
              })
            }
          })

        setChangeData(!changeData)
        localStorage.setItem("productSelected", JSON.stringify(productData))
        setProductData(productData)
    }

    return (
        <div className="flex flex-col md:flex-row mt-3 md:items-center mb-4 justify-center">
            <div className="flex gap-3 basis-3/5 items-center">
                <img src={`.${item.image}`} alt="" className="w-32 h-32 object-contain"></img>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-4">{item.title}</h3>
                    <div className="text-sm mt-2 leading-4"><span>Số lượng: </span>{amount}</div>
                    <div className="text-sm mt-2">{(item.price).toLocaleString("en-US")}đ</div>
                </div>
            </div>
            <div className="flex basis-2/5 mt-3 md:mt-0 justify-between items-center">
                <div className="flex flex-row gap-2 md:flex-col items-center">
                    <div className="flex items-center">
                        <div className="border cursor-pointer py-1 px-4 text-xl" onClick={handleDescrease}>-</div>
                        <input className="border w-16 block py-2 text-center text-base focus:outline-none" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <div className="border cursor-pointer py-1 px-4 text-xl" onClick={handleIncrease}>+</div>
                    </div>
                    <div className="flex gap-3 mt-2">
                        <div className="text-sm font-semibold underline cursor-pointer" onClick={handleDelete}>Xóa</div>
                    </div>
                </div>
                <div className="text-lg mt-2">{(item.price * amount).toLocaleString("en-US")}đ</div>
            </div>
        </div>
    );
}

export default CartItem;