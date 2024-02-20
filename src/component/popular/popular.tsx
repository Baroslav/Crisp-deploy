import { useState } from "react"
import "./popular.css"
import { goodsList } from "../catalog-list/catalog-list"
import { Link } from "react-router-dom"

export const Popular = () => {

    const checkList = [
    {
        value :"BEST SELLERS",
        index:1
    },
    {
        value :"NEW ARIVALS",
        index: 2
    },
    {
        value : "TOP women",
        index : 3
    },
    {
        value : "COLLECTION: SUMMER",
        index : 4
    },
    {
        value : "COLLECTION: SPRING",
        index : 5
    },
    {
        value : "TRENDING",
        index : 6
    }
]

    
    const [visible,setVisible] = useState(8)
    const [check,setCheck] =useState<any[]>([])

    const checkChange=(e :any, i : string)=>{
        const achiveData = (document.getElementById(i) as HTMLInputElement).checked
        if(achiveData === true) {
            setCheck([...check , e.target.value])

        }else{
            setCheck(check.filter(values=>values !==e.target.value))
        }
    }

    const showMoreItems=()=>{
        setVisible(visible+4)
    }

    const filterGoods = goodsList.filter(item=>
        check.length===0 ? true : check.includes(item.categori)
    )

    
    return (
        <section className="popular">
            <aside className="popularity">
                <h4 className="sameWear">Shop Some Wear:</h4>
                <ul className="cheklist">
                    {checkList.map((item,i :any,number)=>(   
                        <label className="checkBox" key={i}>
                            <input id={i} className="real-checkBox" type="checkbox" value={item.value} onChange={(e)=>checkChange(e,i)}/>
                            <span className="decor-checkBox"></span>
                            {item.value}
                        </label>
                    ))}
                </ul>
            </aside>
            <div className="goods-popular">
                <h4 className="sameWear">Shop Some Wear:</h4>
                <div className="goods-list">
                    {
                        filterGoods.slice(0,visible).map(item=>(
                            <Link key={item.id} to={`/shop/${item.id}`} className="goods-item">
                                <img src={item.img} alt="" />
                                <p className="categori">{item.categori}</p>
                                <h4 className="title">{item.title}</h4>
                                {item.discount ? 
                                <span className="discount">
                                <p className="discount-price">{(item.price-(item.price*(10/100)))} EUR</p>
                                <p className="old-price">{item.price} EUR</p>
                                </span>
                                :
                                <p className="price">{item.price} EUR</p>
                                }
                            </Link>
                        ))
                    }
                </div>
                {visible > filterGoods.length ? 
                <span></span>
                :
                <button onClick={showMoreItems}>Load more</button> 
                }
            </div>
        </section>
    )
}