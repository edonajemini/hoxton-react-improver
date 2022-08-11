import { useState } from 'react'
import { Link, Route } from "react-router-dom";
import './App.css'
import {AddProduct } from "./components/AddProduct"
import {Home } from "./pages/Home";
import {Header} from "./components/Header"
import { Products } from './components/Products';
import {Footer} from "./components/Footer"
function App() {

  const [products, setProducts] = useState([
    {
      id:1,
      image: "https://www.forevernew.co.in/media/catalog/product/cache/0f1e57fb43dd9eae693800499a6afb18/o/l/oldimlall_onbody_27402501_f_0nks86zlffdvdqvn.jpg",
      price: "30.52",
      inCart: 0
    },
    {
      id:2,
      image: "https://ae01.alicdn.com/kf/HTB1RSNKXRv0gK0jSZKbq6zK2FXaA/Japanese-Kawaii-Thin-Jacket-Teen-Girls-Cute-Cat-Casual-Zip-Up-Hoodie-Women-Black-Pink-Zipper.jpg_Q90.jpg_.webp",
      price: "40.00",
      inCart: 0
    },
    {
      id:3,
      image: "https://a.tobi.com/product_images/sm/1/distressed-light-wash-holmby-hills-overlap-straight-leg-jeans.jpg",
      price: "55.00",
      inCart: 0
    },
    {
      id:4,
      image: "https://i.pinimg.com/originals/67/32/ae/6732ae310d14f1b024c7d798bd7c87f5.jpg",
      price: "45.50",
      inCart: 0
    },
    {
      id:5,
      image: "https://cdn.shopify.com/s/files/1/2434/7173/products/WhatsAppImage2020-09-09at11.27.41_1125x.jpg?v=1607158245",
      price: "60.00",
      inCart: 0
    },
    {
      id:6,
      image: "https://cdn.shopify.com/s/files/1/2434/7173/products/WhatsAppImage2021-01-25at08.08.33_823x.jpg?v=1611829300",
      price: "35.00",
      inCart: 0
    },
    {
      id:7,
      image: "https://www.lovethispic.com/uploaded_images/351899-Cute-Jewelry-Ring-Accessories.jpg",
      price: "15.00",
      inCart: 0
    },
    {
      id:8,
      image: "https://www.lakeshorelady.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-29-at-9.50.16-AM-944x1024.png",
      price: "70.00",
      inCart: 0
    },
    {
      id:9,
      image: "https://www.tasteofhome.com/wp-content/uploads/2018/07/handmade-sprinkle-donut-necklace-amazon.jpg?fit=700,700",
      price: "10.00",
      inCart: 0
    },
    {
      id: 10,
      image: "https://fashionista.com/.image/t_share/MTY1NTU1OTYyNTEyNDE4MzQy/upcycled-denim-skirt.jpg",
      price: "40.00",
      inCart: 0
    }
  ])

  const [messages, setMessages] = useState([])

return (
  <div>
  <Header />
  <Products products = {products}/>
  <AddProduct  products = {products} setProducts = {setProducts} />
  <Footer  messages = {messages} setMessages = {setMessages} />
  </div>
)
}

export default App
