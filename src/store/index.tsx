import { combineReducers, legacy_createStore } from "redux";
import brend_reducer from "./brend-reducer";
import size_reducer from "./size_reducer";
import length_reducer from "./length_reducer";
import price_reducer from "./price_reducer";
import color_reducer from "./color_reducer";
import cart_reducer from "./cart-reducer";
import { favorite_reducer } from "./favorite_reducer";

const rootReducer = combineReducers({
    brendReducer: brend_reducer,
    sizeReducer : size_reducer,
    lengthReducer : length_reducer,
    colorReducer : color_reducer,
    priceReducer : price_reducer,
    cartReducer: cart_reducer,
    favoriteReducer : favorite_reducer
})





const store=legacy_createStore(rootReducer)



export default store