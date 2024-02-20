import './explore.css'
import { Button } from "../btn/button"
import { HeaderDecor } from "../headreDecor/headerDecor"

const Explore =()=> {
    return(
        <section className="explore">
            <img className='exploreImg' src="./img/explore/1.png" alt="" />
            <div className="explore-content">
                <HeaderDecor/>
                <p>You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco.</p>
                <Button/>
            </div>
        </section>
    )
}

export default Explore