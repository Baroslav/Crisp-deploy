import { useSelector } from 'react-redux'
import './catalogList.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const goodsList = [
    {
        id:0,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/1.png",
        categori:"NEW ARIVALS",
        price:400.00,
        color:'#F3ECE2',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'state',
        quantity:1,
        dressLength:'short'
    },
    {
        id:1,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/2.png",
        categori:"TRENDING",
        price:235.00,
        color: '#DAB1B1',
        size : ['w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'cooper',
        quantity:1,
        dressLength:'knee length'
    },
    {
        id:2,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/3.png",
        categori:"COLLECTION: SUMMER",
        price:90.00,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28',,'w40','w42','w44','w46','w48','w50','w52'],
        brend:'cooper',
        quantity:1,
        dressLength:'hight low'
    },
    {
        id:3,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/4.png",
        categori:"TOP women",
        price: 250.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'cece',
        quantity:1,
        dressLength:'short'
    },
    {
        id:4,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/5.png",
        categori:"BEST SELLERS",
        price:300.00,
        color:'#971E34',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36'],
        brend:'donna ricco',
        quantity:1,
        dressLength:'long'
    },
    {
        id:5,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/6.png",
        categori:"COLLECTION: SUMMER",
        price:120.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36'],
        brend:'state',
        quantity:1,
        dressLength:'short'
    },
    {
        id:6,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/1.png",
        categori:"TOP women",
        price:450.00,
        color:'#F3ECE2',
        size : ['osfa', ,'w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'donna ricco',
        quantity:1,
        dressLength:'short'
    },
    {
        id:7,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/2.png",
        categori:"BEST SELLERS",
        price:235.00,
        color: '#DAB1B1',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'state',
        quantity:1,
        dressLength:'knee length'
    },
    {
        id:8,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/3.png",
        categori:"TOP women",
        price:90.00 ,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'state',
        quantity:1,
        dressLength:'hight low'
    },
    {
        id:9,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/4.png",
        categori:"BEST SELLERS",
        price: 225.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'state',
        quantity:1,
        dressLength:'short'
    },
    {
        id:10,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/5.png",
        categori:"TOP women",
        price:400.00,
        color:'#971E34',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31'],
        brend:'alfani' ,
        quantity:1,
        dressLength:'long',
    },
    {
        id:11,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/6.png",
        categori:"COLLECTION: SPRING",
        price:139.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'cece',
        quantity:1,
        dressLength:'short'
    },
    {
        id:12,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/6.png",
        categori:"COLLECTION: SUMMER",
        price:139.00 ,
        discount: true,
        color: '#292A2D',
        size : ['w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'cece',
        quantity:1,
        dressLength:'short'
    },
    {
        id:13,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/1.png",
        categori:"TRENDING",
        price:139.00,
        color:'#F3ECE2',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'short'
    },
    {
        id:14,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/2.png",
        categori:"TOP women",
        price:235.00,
        color: '#DAB1B1',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'knee length'
    },
    {
        id:15,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/3.png",
        categori:"COLLECTION: SPRING",
        price:90.00,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'hight low'
    },
    {
        id:16,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/4.png",
        categori:"TOP women",
        price: 139.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'short'
    },
    {
        id:17,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/5.png",
        categori:"TOP women",
        price:139.00,
        color:'#971E34',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'long'
    },
    {
        id:18,
        title:"Angels malu zip jeans slim black used",
        img:"./img/goods/6.png",
        categori:"COLLECTION: SPRING",
        price:139.00 ,
        discount: true,
        color: '#292A2D',
        size : ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52'],
        brend:'alfani',
        quantity:1,
        dressLength:'short'
    }
]


const CatalogList=()=> {
    const filteredBrend = useSelector((state :any)  =>state.brendReducer.brend)
    const filteredSize = useSelector((state:any)=>state.sizeReducer.size)
    const filteredLength = useSelector((state:any)=>state.lengthReducer.length)
    const filteredColor =useSelector((state:any)=>state.colorReducer.color)
    const filteredPrice =useSelector((state:any)=>state.priceReducer.priceRange)

    console.log(filteredPrice)
    

    const filteredGoods = goodsList.filter(item => {
        if (filteredBrend.length > 0 && !filteredBrend.includes(item.brend)) {
            return false;
        }
        if (filteredSize.length > 0 && !filteredSize.some((size : string) => item.size.includes(size))) {
            return false;
        }   
        if (filteredLength.length > 0 && !filteredLength.includes(item.dressLength)) {
            return false;
        }
        if (filteredColor.length > 0 && !filteredColor.includes(item.color)) {
            return false;
        }
        if (filteredPrice.length > 0 && (item.price < filteredPrice[0][0] || item.price > filteredPrice[0][1])) {
            return false;
        }
        return true
    });


    

    return (
        <div className="goods">
            {
                filteredGoods.map((item:any , i:number)=> (
                    <Link key={item.id} to={`/shop/${item.id}`} className='goods-item'>
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                        <p>{item.price} EUR</p>
                        <div className="color-block">
                                <div className="iner-block" style={{backgroundColor: item.color}}></div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CatalogList