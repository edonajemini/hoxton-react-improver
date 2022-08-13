import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
type Newproducts = {
  id: number,
  image: string,
  price: number,
  inCart:number
}
export function AddProducts(){
const [newproducts, setNewproducts] = useState<Newproducts[]>([])

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
                    <button onClick={()=>{
                      fetch(`http://localhost:4000/newproducts/${item.id}`,{
                        method:"DELETE"
                      }).then((resp) => resp.json())
                      .then(() =>
                    location.reload()
                      )
                  
                    }}> REMOVE </button>
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
  image: event.target.image.value,
  inCart: 0
}
productCopy.push(newProduct);
//update State
setNewproducts(productCopy)
}}>
  <input className='number-input' type="number" name='price' id='price' placeholder='Price?' required></input>
  <input className='url-input' type="url" name="image" id='image' placeholder='The Image URL' required></input>
  <button className='addproduct-btn' onClick={(event)=>{
    fetch("http://localhost:4000/newproducts",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: document.getElementById("image")?.value,
        price: document.getElementById("price")?.value,
        inCart: 0
      }
      )
    }) .then(resp => resp.json())
    .then(newproductsfromserver => setNewproducts([...newproducts, newproductsfromserver]))
  }}>
 Post Product
 </button>
</form>
      </>
  )
}