import {} from "react";
import "../../Components/ProductCategoryOne/ProductCategoryOne.css";
// import { AiOutlineHeart, ShoppingCart, CallRounded } from '@mui/icons-material'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

function ProductCategoryOne({
  ProductImage,
  ProductName,
  Price,
  HotSale,
  NewProduct,
}) {
  return (
    <section className="p-5 pt-5">
      <h4 className="text-3xl font-bold">Products</h4>
      <div className="w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 pt-5 gap-5 gap-y-8 place-items-center justify-center ">
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
        <div className="w-[300px] bg-[white] hover:shadow-md rounded-md p-5">
          <img src={ProductImage} alt="product" />
           <p className="text-xl font-bold">{ProductName}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex text-2xl items-center gap-3">
              <a href="#" className="cart-btn">
                {<AiOutlineHeart />}
              </a>
              <a href="#" className="cart-btn">
                {<AiOutlineShoppingCart />}
              </a>
            </div>
            <div className="price">${Price}</div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ProductCategoryOne;
