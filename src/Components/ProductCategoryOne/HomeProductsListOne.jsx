// import ProductsImage from '../../Components/Banner/BannerImages/Banner5.jpeg'
import ProductCategoryOne from './ProductCategoryOne';
import '../../Components/ProductCategoryOne/ProductCategoryOne.css'
import { Link } from 'react-router-dom'


const HomeProductsListOne = ({ products, searchQuery }) => {
  //filter the products list based on the search query
  const filteredProducts = products.filter((product) => 
  product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <h1 className="heading block mt-3 text-lg leading-tight font-medium text-slate-700 font-semibold">
         <span> Products </span> Category 
      </h1><br/>

    <div className='boxContainer m-5 md:flex justify-center text-center'>
        {
          // the below code returns a loop of the API using dot map
          // filteredProducts.map executes the search function
          filteredProducts.map((product, i) => (
          <ProductCategoryOne 
          key={i}
          Image={product.image} 
          Name={product.name} 
          Price={product.price} 
          HotSale={"Hot"} 
          NewProduct={"new"}
          />
       ))
        }
                        
    </div>
     <Link to="/Products">
         <h3 className="ProductsView m-2 mt-1 text-lg leading-tight 
         font-medium text-green-400 
         font-semibold underline">View Products</h3>
     </Link>  
    </>
  );
}

export default HomeProductsListOne;
