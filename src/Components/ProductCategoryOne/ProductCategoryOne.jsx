import {} from 'react'
import '../../Components/ProductCategoryOne/ProductCategoryOne.css'
import {} from '@mui/material'
import { Favorite, ShoppingCart, CallRounded } from '@mui/icons-material'

function ProductCategoryOne({ ProductImage, ProductName, Price, HotSale, NewProduct }) {
  return (
    <>
    {/* this just for testing purpose because an API i yet to be created for calling */}
      <h1 className="heading block mt-3 text-lg leading-tight font-medium text-slate-700 font-semibold"> <span> Products </span> Category </h1><br/>
      <div className="boxContainer md:flex justify-center text-center m-5">
         <div className="box">
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
              <div className="content">
                  <h3>{ProductName}</h3>
                  <div className="price">${Price}</div>
              </div>
          </div>
          <div className="box">
              <div className='New-box-red uppercase text-small leading-tight font-small font-300'>{HotSale}</div>
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className='New-box-green uppercase text-small leading-tight font-small font-300'>{NewProduct}</div>
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3> 
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className='New-box-red uppercase text-small leading-tight font-small font-300'>{HotSale}</div>
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className='New-box-green uppercase text-small leading-tight font-small font-300'>{NewProduct}</div>
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
          <div className="box">
              <div className='New-box-red uppercase text-small leading-tight font-small font-300'>{HotSale}</div>
              <div className="image">
                  <img src={ProductImage} />
                  <div className="icons">
                      <a href="#" className="cart-btn">{<Favorite/>}</a>
                      <a href="#" className="cart-btn">{<ShoppingCart/>}</a>
                      <a href="#" className="cart-btn">{<CallRounded/>}</a>
                  </div>
              </div>
                <div className="content">
                    <h3>{ProductName}</h3>
                    <div className="price">${Price}</div>
                </div>
          </div>
      </div><br/>
      <a href={'#'} className="m-2 mt-1 text-lg leading-tight font-medium text-green-400 font-semibold underline">
        View Products
      </a>
    </>
  )
}

export default ProductCategoryOne

