import './favorite.css'

import React, { Component } from 'react'



import { useDispatch, useSelector } from 'react-redux'
const Favorite =()=>{
    const dispatch =useDispatch()
    const favorite = useSelector((state:any)=>state.favoriteReducer.favorite)

    const remuveFavorite =(item:Object)=>{
        dispatch({type:"DELETE_FAVORITE",payLoad:item})
    }

    return(
        <>
            <h1 className='favorite-header'>Favorite</h1>
            <section className='favorite-groop'>
                <div className="favorite items">
                    {
                        favorite.map((item:any,index:number)=>(
                            <div className="favorite-item">
                                <img src={item.img} alt="" className="favorite-img" />\
                                <div className="item-info">
                                    <h4 className="item-title">{item.title}</h4>
                                    <p className="item-brend">{item.brend}</p>
                                </div>
                                <div className="btn-groop">
                                    <span className="select-btn">

                                    </span>
                                    <span 
                                    onClick={()=>remuveFavorite(item)}
                                    className='delet-btn'
                                        
                                    ></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Favorite