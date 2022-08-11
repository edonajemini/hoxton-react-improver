import { Link } from "react-router-dom"
export function Header(){
    return(
            <div className='header'>
        <ul className='header-ul'>
        <img
            className="pretty-decoration"
            src='https://storage.googleapis.com/pod_public/1300/96821.jpg'
            alt=""
          />
          <li className='header-li'>
          <Link to="/home">Home</Link>
          </li>
          <li className='header-li'>
          <Link to="/categories"> Categories</Link>
          </li>
          <li className='header-li'>
          <Link to="/cart"> Cart</Link>
          </li>
          <li className='header-li'>
          <Link to="/aboutus"> About Us</Link>
          </li>
        </ul>

    <h1>Edona 's little shop</h1>
      </div>
    )
}