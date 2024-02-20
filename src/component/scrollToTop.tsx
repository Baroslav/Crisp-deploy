import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const ScrollToTop =()=> {
    const location =useLocation()
    const navigate =useNavigate()

    useEffect(()=>{
        const hash =location.hash
        if(hash==='') {
            window.scrollTo(0,0)
        }else {
            const element = document.querySelector(hash);
            if(element) {
                element.scrollIntoView({behavior: 'smooth'})
            }else {
                navigate('/',{replace:true})
            }
        }
    },[location,navigate])



    return null
    
}

export default ScrollToTop