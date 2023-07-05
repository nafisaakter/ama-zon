import React, { useState } from 'react';
import fakeData from '../../fakeData';
import '../Shop/Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    
  const firstten = fakeData.slice(0,10);
  const [products, setProducts] = useState(firstten);
  const [cart, setCart] = useState([]);

  const handleAddproduct = (product) => {
    console.log('product added',product);
    const newCart = [...cart, product];
    setCart(newCart);
  }
    return (
        <div className='shop-container'>
           <div className="product-container">
            {
                 products.map(pd => <Product 
                  handleAddproduct={handleAddproduct}
                  product={pd} 
                  ></Product> )
            }
            
                
            
           </div>
           <div className="cart-container">
            <h2>this is cart</h2>
            <h5>Order summary : {cart.length} </h5>
           </div>
            
        </div>
    );
};

export default Shop;