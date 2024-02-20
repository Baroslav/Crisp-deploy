import Footer from "../footer/footer"
import Header from "../header/header"
import { Outlet } from "react-router-dom"
import GoodsItem from "../pages/goods-item"


const Layout =()=> {
   return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
   )

}

export {Layout}