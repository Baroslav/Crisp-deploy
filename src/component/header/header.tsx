import "./header.css"
import logo from "../../../src/img/header/logo.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
    const cartItem =useSelector((state:any)=>state.cartReducer.cartItem)
    const [openBurger,setOpenBurger] = useState(false)

    const totalPrice = cartItem.reduce((accamulator:number, curentValue:any)=> {
        return accamulator +curentValue.price
    },0)
    const totalItem = cartItem.reduce((accamulator:number, curentValue:any)=> {
        return accamulator + 1
    },0)

    console.log(totalItem)
    const burgerClick =()=>{
        document.body.classList.toggle('body-open-menu')
        setOpenBurger(!openBurger)
    }

    return(
       <>
         <header>
            <Link to='/' className="logo">
                <img src="../../img/header/logo.svg" alt="Logo" />
            </Link>
            <div className="nav-wraper">
                <div className={`header-burger ${openBurger ? "active" : ''}`}onClick={()=>burgerClick()}>
                    <span></span>
                </div>
                <nav className="nav">
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/shop'>shop</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><a href="#contact">contact us</a></li>
                </nav>
            </div>
            <div className="at">
                <ul className="sing">
                    <Link to='/error'><li className="sing-in">sing in</li></Link>
                    <Link to='/error'><li className="create">create an account</li></Link>
                </ul>
                <div className="likes">
                    <Link to="/favorite">
                        <img src="../../img/header/likes.svg" alt="" />
                    </Link>
                    <div className="cart-grup">
                        <Link to='/cart'>
                            <img src="../img/header/cart.svg" alt="" />
                        </Link>
                        <p className="mobile-total">{totalItem}</p>
                        <span className="value">
                            <p className="total-item">{totalItem>0 ? `${totalItem} item(s)` : "shoping cart"}</p>
                            <p className="total">{totalPrice} EUR</p>
                        </span>
                    </div>
                </div>
            </div>
        </header>
        <nav className={`nav-mobile ${openBurger ? "active" : ""}`}>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/shop'>shop</Link></li>
             <li><Link to='/blog'>blog</Link></li>
            <li><a>contact us</a></li>
            <li className="search">search</li>
        </nav>
       </>
    )
}


export default Header