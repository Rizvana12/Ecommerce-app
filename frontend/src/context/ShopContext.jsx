import { createContext , useEffect, useState} from 'react';
import {products} from '../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee = 10;
    
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();


    const addToCart =(itemId ,size) =>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);
        
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

   const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item]>0){
                    totalCount += cartItems[items][item];
            
                }    
            }catch(error){
                console.error('Error calculating cart count:', error);
            }

        }
    }
    return totalCount;
   }
       
    const updateQuantity = (itemId,size,quantity) => {
        const cartData = structuredClone(cartItems) || {};
        try{
            if(!cartData[itemId]) return;

            if(quantity > 0){
                cartData[itemId][size] = quantity;
            } else {
                // remove the size entry
                if(cartData[itemId][size] !== undefined){
                    delete cartData[itemId][size];
                }
                // if no sizes left for this product, remove the product
                if(Object.keys(cartData[itemId]).length === 0){
                    delete cartData[itemId];
                }
            }
            setCartItems(cartData);
        }catch(err){
            console.error('updateQuantity error:', err);
        }
    }
    
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((prod)=>prod._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){
                    console.error('Error calculating cart amount:', error);
                } 
            }
        }
        return totalAmount;
    }

    const value = {
       products, 
       currency, 
       delivery_fee, 
       search, 
       setSearch, 
       showSearch, 
       setShowSearch, 
       cartItems, 
       setCartItems, 
       addToCart, 
       getCartCount, 
       updateQuantity, 
       getCartAmount, 
       navigate,
       visible,
       setVisible
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider> 
    )  
}