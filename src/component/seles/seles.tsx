import { Link } from 'react-router-dom'
import './seles.css'

const Seles =()=> {
    return(
        <section className="seles">
            <div className="seles-blocks seles-blocks-1">
                <div className="seles-item seles-look">
                    <h3>choosе your look</h3>
                    <p>See our clothing collections</p>
                    <Link to='/shop'><button>see offers</button></Link>
                </div>
                <img src="../img/seles/1.png" alt="" />
            </div>
            <div className="seles-blocks seles-blocks-2">
                <div className="seles-item seles-brend">
                    <h3>brand new style</h3>
                    <p>Popular clothing brands</p>
                    <Link to='/shop'><button>see offers</button></Link>
                </div>
                <img src="./img/seles/2.png" alt="" />
            </div>
            <div className="seles-blocks seles-blocks-3">
                <div className="seles-item seles-discount">
                    <h3>Up to 40% off</h3>
                    <p>Special offers and great deals</p>
                    <Link to='/shop'><button>see offers</button></Link>
                </div>
                <img src="./img/seles/3.png" alt="" />
            </div>
        </section>
    )
}

export default Seles