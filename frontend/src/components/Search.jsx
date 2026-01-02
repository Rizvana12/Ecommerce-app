import { useState, useEffect, useContext } from 'react';
import { products } from '../assets/assets.js';
import { ShopContext } from '../context/ShopContext.jsx'
import {assets} from '../assets/assets.js'
import { useNavigate, useLocation } from 'react-router-dom'; // Use navigate for better control

function Search() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext); 
  const location = useLocation()
  const [visible, setVisible] = useState(false);

  // Handle selection logic
  const handleSelect = (product) => {
    setInput(product.name);
    setShowResults(false);
    navigate(`/product/${product._id}`); // Navigate programmatically
  };

  useEffect(() => {
     if(location.pathname.includes('collection')){
            setVisible(true);
        } else {
            setVisible(false);
        }
    if (input.trim()) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      setResults(filteredProducts.slice(0, 5));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [input, location]);

  return showSearch && visible ? (
    <div className='border-t flex justify-center items-center bg-gray-50'>
      <div className="relative gap-5 px-5 py-2 mx-3 my-5">
        <div className='w-45 sm:w-90'>
          <input
            onFocus={() => input && setShowResults(true)} 
            // Keep the timeout for blur so the click on result registers
            onBlur={() =>setTimeout(() =>setShowResults(false), 200)}
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 outline-none"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          
        </div>

       {showResults && results.length > 0 && (
        <div className="absolute z-10 w-45 sm:w-90 bg-white rounded-md border border-gray-300 shadow-lg overflow-y-auto">
          {results.map((r) => (
            <div
              key={r._id}
              className="block w-full hover:bg-gray-100 cursor-pointer p-2 text-sm"
              onClick={() => handleSelect(r)} // Use onMouseDown to beat the onBlur event
            >
              {r.name}
            </div>
          ))}
        </div>
        )}
        
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ):null;
}

export default Search;