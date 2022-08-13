import { useState, useEffect } from 'react'
export function AddProducts(){
const [newproducts, setNewproducts] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/newproducts")
    .then((resp) => resp.json())
    .then((productsFromServer) => setNewproducts(productsFromServer));
}, []);

  return(
      <>
      <div className='products'>
<ul className='product-Ul'>
          {
            newproducts.map(item => (
              <div className='product-cart'>
                <li className='product-list'>
                  <img src={item.image} />
                  <div className='put-it-in-cart'>
                    <h3>${item.price}</h3>
                    <button> REMOVE </button>
                  </div>
                </li>
              </div>
            ))}
        </ul>
</div>
       <form className='addproduct-form' onSubmit={event => {event.preventDefault()
//make a copy of the products
const productCopy = structuredClone(newproducts)
//add the new product
let newProduct = { 
  price: event.target.price.value,
  image: event.target.image.value
}
productCopy.push(newProduct);
//update State
setNewproducts(productCopy)
}}>
  <input className='number-input' type="number" name='price' placeholder='Price?' required></input>
  <input className='url-input' type="url" name="image" placeholder='The Image URL' required></input>
  <button className='addproduct-btn' onClick={()=>{
    fetch("http://localhost:4000/newproducts",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
  }}>
 Post Product
 </button>
</form>
      </>
  )
}