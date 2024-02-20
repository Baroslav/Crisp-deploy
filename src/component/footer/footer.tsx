import FooterBtn from '../footerBtn/footerBtn'
import './footer.css'
import { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

const Footer =()=> {
    const [email,setEmail] = useState<string>('Email Address')
    const handleChange =(event : ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
    }
    const [features,setfeatures] = useState<boolean>(false)
    const [menu,setMenu] = useState<boolean>(false)
    const [contact,setContact] = useState<boolean>(false)
    const [follow,setfollow] = useState<boolean>(false)

    return(
        <footer className="footer">
            <div className="pros">
                <span>
                    <img src="./img/footer/Pros.svg" alt="" />
                    <p>Duties and Taxes Guaranteed</p>
                </span>
                <span>
                    <img src="./img/footer/Pros.svg" alt="" />
                    <p>Free Express Shipping</p>
                </span>
                <span>
                    <img src="./img/footer/Pros.svg" alt="" />
                    <p>Customer Love</p>
                </span>
                <span>
                    <img src="./img/footer/Pros.svg" alt="" />
                    <p>Easy Returns</p>
                </span>
                <span>
                    <img src="./img/footer/Pros.svg" alt="" />
                    <p>Secure Payment</p>
                </span>
            </div>

            <div className="main-footer">
                <Link to='/' className='footerLogo'>  
                    <img  src="./img/header/logo.svg" alt="" />
                </Link>
                <div >
                    <h3 onClick={()=>setfeatures(!features)}>features
                        <span className={`plus ${features ? 'active' : ''}`}></span>
                    </h3>
                    <ul className={`featuresList ${features ? 'active' : ''}`}>
                        <li>men</li>
                        <li>women</li>
                        <li>boys</li>
                        <li>girls</li>
                        <li>new arrivals</li>
                        <li>shoes</li>
                        <li>cothes</li>
                        <li> accessories</li>
                    </ul>  
                </div>
                <div>
                    <h3 onClick={()=>setMenu(!menu)}>
                        Menu
                        <span className={`plus ${menu ? 'active' : ''}`}></span>
                    </h3>
                    <ul className={`menuList ${menu ? 'active' : ''}`}>
                        <li>About us</li>
                        <li>contact us</li>
                        <li>my account </li>
                        <li>orders history</li>
                        <li>MY WISHLIST</li>
                        <li>BLOG </li>
                        <li>LOGIN</li>
                    </ul>
                    <span className={`plus ${menu ? 'active' : ''}`}></span>
                </div>
                <div id='contact' className='contact'>
                    <h3 onClick={()=>setContact(!contact)}>
                        contact us <span className={`plus ${contact ? 'active' : ''}`}></span>
                        </h3>
                    <div className={`contact-us ${contact ? 'active' : ''}`}>
                        <span className='contsct-item'>
                            <h4>Address:</h4>
                            <p>123 STREET NAME, CITY, ENGLAND</p>
                        </span>
                        <span className='contsct-item'>
                            <h4>Phone:</h4>
                            <p>(123) 456-7890</p>
                        </span>
                        <span className='contsct-item'>
                            <h4>email:</h4>
                            <p> MAIL@EXAMPLE.COM</p>
                        </span>
                        <span className='contsct-item'>
                            <h4>working days/hours</h4>
                            <p>MON - SUN / 9:00AM - 8:00PM</p>
                        </span>
                    </div>
                </div>
                <div className='social'>
                    <h3 onClick={()=>setfollow(!follow)}>
                            follow us <span className={`plus ${follow ? 'active' : ''}`}></span>
                        </h3>
                   <div className={`social-group ${follow ? 'active' : ''}`}>
                        <span className='social-item'>
                            <img src="./img/footer/facebook.svg" alt="FACEBOOK" />
                            <p>FACEBOOK</p>
                        </span>
                        <span className='social-item'>
                            <img src="./img/footer/twitter.svg" alt="TWITTER" />
                            <p>TWITTER</p>
                        </span>
                        <span className='social-item'>
                            <img src="./img/footer/instagram.svg" alt="INSTAGRAM" />
                            <p>INSTAGRAM</p>
                        </span>
                   </div>
                </div>
                <div className='subscribe'>
                    <h3>join us</h3>
                    <div className="form-group">
                        <p>Subscribe to our newsletters</p>
                        <input className='footer-input' type="text" 
                        value={email}
                        onChange={handleChange}
                        />
                        <FooterBtn/>
                    </div>
                </div>
            </div>
            <div className="privat">
                    <p>© 2019.</p>
            </div>
        </footer>
    )
}

export default Footer