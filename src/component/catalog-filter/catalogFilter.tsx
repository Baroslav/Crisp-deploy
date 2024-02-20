import { useEffect, useState } from 'react'
import './catalogFilter.css'
import Slider from 'react-slider'
import { useDispatch, useSelector } from 'react-redux'


const brend = ['state','cooper','bardot','alfani' ,'cece','donna ricco']
const size = ['osfa', 'w26','w27','w28','w29','w30','w31','w32','w33','w34','w35','w36','w38','w40','w42','w44','w46','w48','w50','w52']
const dressLength =['short','knee length','hight low','long','midi']
const color=['#292A2D','#F3ECE2','#24426A','#18574A','#666689','#C2BEB6','#AAABA7','#971E34','#CBA13E','#73513C','#DAB1B1','#2B9FA7']
const MIN = 0;
const MAX = 500; 

const CatalogFilter =()=> {
    const [openFilterList,setOpenFilterList]=useState(false)
    const [openFilter , setOpenFilter]=useState(false)
    const [values, setValues] = useState([MIN,MAX])
    const dispach = useDispatch()
    const filteredBrend = useSelector((state :any)  =>state.brendReducer.brend)
    const filteredSize = useSelector((state:any)=>state.sizeReducer.size)
    const filteredLength = useSelector((state:any)=>state.lengthReducer.length)
    const filteredColor =useSelector((state:any)=>state.colorReducer.color)
    const filteredPrice =useSelector((state:any)=>state.priceReducer.priceRange)



    const checkBrend =(e:any , i:string)=> {
        const achiveData =(document.getElementById(i) as HTMLInputElement).checked
        if(achiveData===true) {
            dispach({type:"ADD_BREND",payLoad:e.target.value})
        }else {
            dispach({type:"REMOVE_BREND",payLoad:e.target.value})
        }
    }

    const checkSize =(item:string)=> {
        const selectedSize= document.getElementById(item)
        selectedSize?.classList.toggle('active')
        const isSizeAdd = filteredSize.includes(item)

        if(isSizeAdd) {
            dispach({type:"REMOVE_SIZE",payLoad:item})
        }
        else {
            dispach({type:"ADD_SIZE",payLoad:item})
        }
    }

    const checkLenght =(e:any, item:string)=> {
        const achiveLength = (document.getElementById(item) as HTMLInputElement).checked

        if(achiveLength===true) {
            dispach({type:"ADD_LENGHT" ,payLoad:e.target.value})
        }
        else{
            dispach({type:"REMOVE_LENGHT",payLoad:e.target.value})
        }
    }

    const checkColor=(item:string)=>{
      const selectColor = document.getElementById(item)
      selectColor?.classList.toggle("active")
      const isColorSelect = filteredColor.includes(item)

      if(isColorSelect){
        dispach({type:"REMOVE_COLOR",payLoad:item})
      }
      else{
        dispach({type:"ADD_COLOR", payLoad:item})
      }
    }

    const checkPrice=()=> {
        dispach({type:"SET_RENGE",payLoad: values})
    }
    

    const openClick =()=>{
        setOpenFilter(!openFilter)
        const filter=document.getElementsByClassName("catalog-filter")
        const arrow=document.getElementById('arrow')
        filter[0].classList.toggle("active")
        arrow?.classList.toggle("active")
    }


    return(
        <> 
        <h4 className='filter-list'
        onClick={()=>openClick()}
        >filter 
        <span id='arrow'></span>
        </h4>
        <aside className='catalog-filter'> 
            <div className="filter-active">
                <h4 className='filter-active-header'>Filter</h4>
                <div className="brend-active">
                    <h4>Brend:</h4>
                    <div className="active-list">
                    {
                        filteredBrend.map((item:any,index :number)=>(
                            <span >
                                {item} 
                            </span>
                        ))
                        
                    }
                    </div>
                </div>
                <div className="size-active">
                    <h4>Size (Inches):</h4>
                    <div className="active-list">
                    {   
                        filteredSize.map((item:any,index :number)=>(
                            <span>
                                {item} 
                            </span>
                        ))
                    }
                    </div>
                <div className="length-active">
                    <h4>Dress length:</h4>
                        <div className="active-list">
                        {   
                            filteredLength.map((item:any,index :number)=>(
                                <span>
                                    {item} 
                                </span>
                            ))
                        }
                        </div>
                </div>
                <div className="color-active"> 
                    <h4>Color:</h4>
                        <div className="active-list">
                        {   
                            filteredColor.map((item:any,index :number)=>(
                                <span>
                                    <div id={item} className="color-block">
                                        <div className="iner-block"  style={{backgroundColor: item}}>       
                                        </div>
                                    </div>
                                </span>
                            ))
                        }
                        </div>
                </div>
                <div className="range-active">
                    <h4>Price Range:</h4>
                    <span><span></span>{values[0]} EUR - {values[1]} EUR</span>
                </div>
                </div>
            </div>
            <div className="brend">
                    <h3>Brand</h3>
                    <ul className="brend-list">
                    {
                        brend.map((item,i :any,number)=>(
                            <label>
                                <input id={i} 
                                className="real-checkBox"
                                type='checkbox' 
                                value={item} 
                                onChange={(e)=> checkBrend(e,i)}/>
                                 <span className="decor-checkBox"></span>
                                {item}
                            </label>
                        ))
                    }
                    </ul>
            </div>

            <div className="size-main">
                <h3>Size</h3> 
                <div className='size-cells'>
                    {
                    size.map((item:string)=>(
                        <p id={item} 
                        onClick={()=>checkSize(item)}
                        >
                            {item}</p>
                        ))
                    }

                </div>
            </div>

            <div className="dress-lenght">
                <h3>Dress length</h3>
                <ul className="dress-length-list">
                    {
                        dressLength.map((item :string, i:number)=>(
                            <label>
                                <input id={item}
                                  className="real-checkBox"
                                  type="checkbox"
                                  value={item}
                                  onChange={(e)=>checkLenght(e,item)}
                                   />
                                <span className="decor-checkBox"></span>
                                {item}
                            </label>
                        ))
                    }
                </ul>
            </div>

            <div className="color">
                <h3>Color</h3>'
                <div className="color-list">
                    {
                        color.map((item : string,i : any,number)=>(
                            <div  id={item} 
                            className="color-block"
                            onClick={()=>checkColor(item)}
                            >
                                <div 
                                 className="iner-block" 
                                 style={{backgroundColor: item}}
                                 ></div>
                                 
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="price-range">
                <h3>Price Range</h3>
                <span className='show-price'>
                    <p>{values[0]} EUR</p>
                    <p>{values[1]} EUR</p>
                </span>
                <Slider 
                    className='range' 
                    onChange={setValues}
                    value={values} 
                    min={MIN} 
                    max={MAX}
                    onAfterChange={()=>checkPrice()}
                    />
            </div>

            <div className="about">
                <h3>About Dresses</h3>
                <p>Every day we’re gonna be dropping the latest trends to help you nail every Summer sitch. Whether it’s a graduation, your mate's wedding, or just a cute day at the races with the gals, our occasion dresses have got you covered. Not looking for something fancy? No stress. We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses, oversized shirt dresses).</p>
            </div>
        </aside>
        </>
    )
}

export default CatalogFilter