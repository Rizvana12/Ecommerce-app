import React, { use } from 'react'
import Title from './title.jsx'
import ProductItem from './ProductItem.jsx'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'

const Bestseller = () => {
    const {products} = useContext(ShopContext);
    const [bestsellerProducts, setBestsellerProducts] = useState([]);
    
    useEffect(() => {
       const bestProduct = products.filter((item)=>(item.bestseller));
       setBestsellerProducts(bestProduct.slice(0,5));
    }, []);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            {/* <Title text1={'BESTSELLER'} text2={'COLLECTION'} /> */}
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
              Discover our best-selling collection of trendy and stylish products, carefully curated to keep you ahead in fashion. Explore now and elevate your style with our new arrivals.
            </p>
        </div>

          {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              bestsellerProducts.map((item, index)=>(
                <ProductItem 
                  key={index}
                  id={item._id} image={item.image} name={item.name} price={item.price} />
              ))
            }
        </div>
    </div>
  )
}

export default Bestseller