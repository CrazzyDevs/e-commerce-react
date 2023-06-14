import {} from 'react'
import {} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import './CartContents.css';


function CartContents() {
  return (
    <>
      <div className='shoppingCart'>
        {/* mui icons for shopping cart contents */}
         <a href={'#'} className='a'>
           <ShoppingCart className='cart'/>
           <div className='cart_contents'>
             <p>0</p>
           </div>
         </a>
      </div>
    </>
  )
}

export default CartContents

