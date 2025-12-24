import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import {assets} from '../assets/assets.js'
import RelatedProducts from '../components/RelatedProducts.jsx'



const Product = () => {
  const {productId} = useParams();
  const {products, currency ,cartItems, setCartItems, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image,setImage] = useState('');
  const [size, setSize] = useState('');
  

  const fetchProductData = () => {
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    
    })
  };
  useEffect(() => {
    fetchProductData();
  }, [productId,products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/*product data*/}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*---------product images---------*/}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>
          {/* <img src={image} alt={productData.name} className='w-full h-auto' /> */}
          <div className='flex sm:flex-col gap-y-2 justify-between sm:w-[18.7%] sm:justify-normal  w-full'>
            {productData.image.map((img,index)=>(
              <img className='sm:w-full w-[24%] sm:mb-3 cursor-pointer' key={index} onClick={()=>setImage(img)} src={img}/>
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/*---------product details---------*/}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="" />
            <p className='pl-2'>(120)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((s, index)=>(
                <div onClick={()=>setSize(s)} key={index} className={`border border-gray-400 px-3 py-2 cursor-pointer hover:border-black text-sm ${s === size ? 'border-orange-500':''}`}>{s}</div>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-2 mt-4 active:bg-gray-700 cursor-pointer'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>  
      </div>
      {/*review section*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>{productData.description}</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, adipisci sed nemo aspernatur consequuntur aliquam atque ducimus. Cum, sint voluptatibus?</p>
        </div>
      </div>

      {/* related products - to be implemented */}
      <RelatedProducts category={productData.category} subCtegory={productData.subCtegory} />

    </div>
  ) : <div className='opacity-0'>Loading...</div>
}

export default Product