
import "../../Components/ProductCategoryOne/ProductCategoryOne.css";
// import { AiOutlineHeart, ShoppingCart, CallRounded } from '@mui/icons-material'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react'

function ProductCategoryOne({ Image, Name, price, NewProduct, HotSale }) {
    const [isFavourite, setFavourite] = useState(false);
  return (
    <>
      <div className="boxContainer md:flex justify-center text-center m-5">
          <div className="box">
              <div className='New-box-green uppercase text-small 
              leading-tight font-small font-300'>{NewProduct}</div>
              <div className="image">
                  <img src={Image} />
                  <div className="icons">{/* icons here within the div */}
                      {/* all product icons here */}
                      <div className={`isfavourite ${isFavourite ? "active": ""}`}
                      onClick={() => setFavourite(!isFavourite)}><AiOutlineHeart/></div>
                      <a href="#" className="cart-btn">{<AiOutlineShoppingCart/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{Name}</h3>
                    <div className="price">${price}</div>
                </div>
          </div>
      </div>
    </>
  )
}

export default ProductCategoryOne;
