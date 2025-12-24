import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'


const Menubar = () => {
    const {visible, setVisible} = useContext(ShopContext)
  useEffect(()=>{
    // prevent body scrolling when menubar is open
    document.body.style.overflow = visible ? 'hidden' : '';
    return ()=>{ document.body.style.overflow = ''; }
  },[visible])
  return (
    
    
    <div className={`absolute top-0 bottom-0 left-0 md:hidden overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'} z-50`}>
        <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 cursor-pointer p-3'>
                        <img src={assets.dropdown_icon} alt="Logo" className='h-4 rotate-180'/>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border-y border-gray-300'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border-y border-gray-300'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border-y border-gray-300'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border-y border-gray-300'>CONTACT</NavLink>
        </div>
    </div>
    
  )
}

export default Menubar