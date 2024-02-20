import CatalogFilter from "../catalog-filter/catalogFilter"
import CatalogList from "../catalog-list/catalog-list"
import './catalogList.css'
import { Provider } from "react-redux"
import store from '../../store/index'

const CatalogMain =()=>{
    return(
        <Provider store={store}>
            <div className="catalog-main">
             <CatalogFilter/>
             <CatalogList/>
            </div>
        </Provider>
    )
}

export default CatalogMain