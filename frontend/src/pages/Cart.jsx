import React, { use, useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useEffect, useState } from 'react'
import Title from '../components/Title.jsx'
import {assets} from '../assets/assets.js'
import CartTotal from '../components/CartTotal.jsx'

const Cart = () => {
  const {products, currency, cartItems,updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        const qty = cartItems[items][item];
        if(qty > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: qty
          });
        }
      }
    }  
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productInfo = products.find((prod)=>prod._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b -gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productInfo.image[0]} alt={productInfo.name} className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productInfo.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productInfo.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  min={1}
                  value={item.quantity}
                  onChange={(e)=>{
                    const val = Number(e.target.value) || 0;
                    updateQuantity(item._id, item.size, val);
                  }}
                />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )
          })  
        }
      </div>
      
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-112.5'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorder')} className='bg-black cursor-pointer text-white text-sm my-8 px-8 py-3'>Proceed To Checkout</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart