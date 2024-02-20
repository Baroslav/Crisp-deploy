import { Button } from "../btn/button"
import './limitless.css'

const Limitles=()=> {
    return(
        <section className="limitles">
            <div className="limitles-content">
                <span>
                    <img src="./img/limitless/vector.svg" alt="" />
                    <h3>shoping without limits.</h3>
                </span>
                <p>You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!</p>
                <Button/>
            </div>
            <img className="limitlessBg" src="./img/limitless/1.png" alt="" />
        </section>
    )
}

export default Limitles

