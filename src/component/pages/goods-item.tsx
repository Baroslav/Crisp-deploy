import { useParams } from 'react-router-dom'
import './catalog-item.css'
import { goodsList } from '../catalog-list/catalog-list'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const size = ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52']

const GoodsItem =()=> {
    const [quant , setQuant] = useState<number>(1)
    const [selectedSize , setSelectedSize] = useState<string>('')
    const dispach = useDispatch()
    const cartItem = useSelector((state:any)=>state.cartReducer.cartItem)
    const favoritem = useSelector((state:any)=>state.favoriteReducer.favorite)
    const {id} = useParams()
    const index = Number(id)
    const totalPrice =(goodsList[index].price-(goodsList[index].price*(10/100)))*quant
    const newAddItem = {
        id : goodsList[index].id,
        title : goodsList[index].title, 
        img : goodsList[index].img , 
        price : totalPrice , 
        color : goodsList[index].color , 
        size : selectedSize , 
        quantity : quant , 
    }


    const addQuant = () => (
        setQuant(quant+1)
    )
    const subQuant = () => {
        if(quant>1) {
            setQuant(quant-1)
        }
    }

    if (!id) {
        return <div>Ідентифікатор не вказаний</div> // або будь-який інший вміст
    }

    const couseSize = (item: string) => {
        setSelectedSize(item)
        const selectSize = document.getElementById(item)
        const cousenSize = document.getElementById(selectedSize)
        if(selectedSize != item) {
            cousenSize?.classList.remove('active')
            selectSize?.classList.add('active')
        }       
    }

    const addCart =()=> { 
        const isItemInCart = cartItem.some((item: { id: number }) => item.id === newAddItem.id);
        if(!isItemInCart){
            dispach({type:"ADD_TO_CART", payLoad:newAddItem})
        }
    }


    const addFavorite =(item:object)=> {
        if(!favoritem.includes(item)){
            dispach({type:"ADD_FAVORITE", payLoad:item})
        }
    }
   
    

    return(
        <section className="goods-item-select">
            <div className="message">
                <p>Ваше замовлення додано в кошик</p>
            </div>
            <div className="item">
                <div className="goods-images">
                    <img src={`../../img/goods/${index+1}.png`} alt="" />
                </div>
                <div className="goods-option">
                    <h4 className='brend'>{goodsList[index].brend}</h4>
                    <h4>{goodsList[index].title}</h4>
                    <div className="selected-color">
                        <h3>Select Color</h3>
                        <div className="color-block active">
                            <div 
                            className="iner-block" 
                            style={{backgroundColor: goodsList[index].color}}>
                            </div>
                        </div>
                    </div>
                    <div className="size-select">
                        <h3>Select size (Inches)</h3>
                        <div className="size">
                           <div className="size-cells">
                            {
                            size.map((item:string)=>(
                                        <p onClick={()=>couseSize(item)} id={item}>{item}</p>
                                ))     
                            }
                            </div>        
                         </div>
                    </div>
                    <div className="price">
                        <div className="quantitu">
                            <p>quantity</p>
                            <div className='quantity-counter'>
                                <span onClick={subQuant}>-</span>
                                    <p>{quant}</p>
                                <span onClick={addQuant} >+</span>
                            </div>
                        </div>
                        <div className="total-price">
                            <p>total-price</p>
                            {goodsList[index].discount ? 
                                <span className="discount">
                                <p className="discount-price">{totalPrice.toFixed(2)} EUR</p>
                                </span>
                                :
                                <p className="price">{totalPrice.toFixed(2)} EUR</p>
                                }
                        </div>
                    </div>
                    <div className="button-section">    
                        <button 
                        className='addButton'
                        onClick={()=>addCart()}
                        >Add to bag
                        </button>
                        <button 
                        className='saveButton'
                        onClick={()=>addFavorite(goodsList[index])}
                        >
                            <li>Save</li>
                        </button>
                    </div>
                    <div className="subtitle">
                        <p><span></span>Free shipping</p>
                        <p><span>Product code:</span> RFKK1024</p>
                        <p><span>TAGS:</span>NEW arrivals, Top women</p>
                    </div>
                </div>
    
            </div>
            <div className="goods-deteils">
                    <div className="deteils">
                        <div className="descriptions">
                            <h4>
                                ABOUT PRODUCT
                            </h4>
                            <p>
                                Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.
                            </p>
                        </div>
                        <div className="abvantege">
                            <h4>
                                Advanteges
                            </h4>
                            <ul>
                                <li>Adjustable straps</li>
                                <li>Scoop neckline</li>
                                <li>Ruffled hems</li>
                                <li>Cropped length</li>
                                <li>Model is wearing a small</li>
                                <li>100% rayon</li>
                                <li>Machine washable</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shoping">
                        <h3>SHIPPING</h3>
                            <p>
                                We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes, shipping and handling. Shipping fees are non-refundable.
                                Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                                Processing Time + Shipping Time = Delivery Time
                            </p>
                    </div>
                </div>

        </section>
    )
}


export default GoodsItem