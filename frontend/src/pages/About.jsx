import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets.js'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-112.5' alt="" />
        <div className='text-gray-700 px-4 md:px-0 md:w-3/5 flex flex-col justify-center gap-4'>
          <p className='text-lg'>Welcome to our e-commerce store! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, all while ensuring exceptional customer service.</p>
          <p className='text-lg'>At our store, we believe in the power of choice. That's why we curate a diverse selection of products to cater to various tastes and preferences. Whether you're looking for the latest fashion trends, cutting-edge electronics, or unique home decor, we've got you covered.</p>
          <p className='text-lg'>Customer satisfaction is at the heart of everything we do. Our team is committed to assisting you every step of the way, from browsing our extensive catalog to ensuring a smooth checkout process and prompt delivery. We value your feedback and continuously strive to improve our services.</p>
          <p className='text-lg'>Thank you for choosing our e-commerce store. We look forward to serving you and making your shopping experience exceptional.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide an unparalleled shopping experience by combining quality products, competitive pricing, and outstanding customer service. We aim to build lasting relationships with our customers through trust, transparency, and a commitment to excellence.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        {<Title text1={'WHY'} text2={'CHOOSE US'}/>}
      </div>
      <div className='flex flex-col gap-4 md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize quality in every product we offer. Our team carefully selects items from trusted suppliers to ensure that you receive only the best.</p>
        </div>
        <div className='border border-gray-300 px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Shopping with us is effortless and convenient. We offer a seamless browsing experience, easy navigation, and fast checkout to make your shopping journey smooth and enjoyable.</p>
        </div>
        <div className='border border-gray-300 px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5'>
          <b>Acceptional Customer Service:</b>
          <p className='text-gray-600'>Our team is committed to assisting you every step of the way, from browsing our extensive catalog to ensuring a smooth checkout process and prompt delivery. We value your feedback and continuously strive to improve our services.</p>
        </div>
      </div>
      
      <NewsLetterBox />
      
    </div>
  )
}

export default About