import { useState, useEffect } from 'react'
import { AddProduct } from "../components/AddProduct";
import { Products } from '../components/Products';
import { Footer } from "../components/Footer";
export function HomePage(){
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
    return(
        <div>
       <Products products={products} />
       <AddProduct products={products} setProducts={ setProducts }/>
       <Footer />
       </div>
    )
}