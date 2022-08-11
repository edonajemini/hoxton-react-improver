export function Form({ products, setProducts }){
    return(
        <>
         <form onSubmit={event => {event.preventDefault()
  //make a copy of the products
  const productCopy = structuredClone(products)
  //add the new product
  let newProduct = { 
    title: event.target.title.value,
    price: event.target.price.value
  }
  productCopy.push(newProduct);
  //update State
  setProducts(productCopy)
  }}>
    <input type="text" name='title'></input>
    <input type="number" name='price'></input>
    <button type='submit' > ADD PRODUCT</button>
   
  </form>
        </>
    )
}