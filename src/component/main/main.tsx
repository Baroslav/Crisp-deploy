import './main.css'
import '../btn/button.css'
import { Link } from 'react-router-dom'
import { Button } from '../btn/button'

const Main =()=> {
    return(
        <main>
            <div className="container">
            <div className='sele'>
                <h1>SUMMER SALE GET <span className='white'>30% OFF</span> On all dress.</h1>
                <Link className='link' to='/shop'>
                    <Button />
                </Link>
            </div>
            <div className='sele-img'>
                <img className='first-img' src="./img/main/1.png" alt="" />
                <img className='second-img' src="./img/main/2.png" alt="" />
            </div>
            </div>
        </main>
    )
}


export default Main