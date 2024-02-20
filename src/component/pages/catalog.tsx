import { Button } from "../btn/button"
import CatalogFilter from "../catalog-filter/catalogFilter"
import CatalogList from "../catalog-list/catalog-list"
import CatalogMain from "../catalog-list/catalogMain"
import Limitles from "../limitless/limitless"
import { Provider } from "react-redux"


const Catalog=()=> {
    return (
        <>
            <Limitles/>
            <CatalogMain/>
        </>
    )
}

export default Catalog