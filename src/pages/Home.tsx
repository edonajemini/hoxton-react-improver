import { Link } from 'react-router-dom'
export function Home(){
    return(
        <div>
            <Link to={"./Home"}>
                    <li>Home</li>
                </Link>
        </div>
    )
}