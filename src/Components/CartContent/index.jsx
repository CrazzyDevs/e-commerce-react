import {} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './index.css';


function CartContents() {
  return (
    <>
      <div className='shoppingCart'>
         <a href={'#'} className='a'>
           <AiOutlineShoppingCart className='cart'/>
           <div className='cart_contents'>
             <p>0</p>
           </div>
         </a>
      </div>
    </>
  )
}

export default CartContents

