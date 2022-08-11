export function Products({products}){
    return(
        <div className='products'>
<ul className='product-Ul'>
          {
            products.map(product => (
              <div className='product-cart'>
                <li className='product-list'>
                  <img src={product.image} />
                  <div className='put-it-in-cart'>
                    <h3>${product.price}</h3>
                    <button> BUY </button>
                  </div>
                </li>
              </div>
            ))}
        </ul>
</div>
    )
}