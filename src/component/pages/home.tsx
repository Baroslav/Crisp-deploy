import { Brend } from "../brend/brend"
import Explore from "../explore/explore"
import Footer from "../footer/footer"
import Header from "../header/header"
import Main from "../main/main"
import { Popular } from "../popular/popular"
import Seles from "../seles/seles"



const Home=()=> {
   return (
    <>
      <Main/>
      <Brend/>
      <Seles/>
      <Popular/>
      <Explore/>
   </>
   )
}

export default Home