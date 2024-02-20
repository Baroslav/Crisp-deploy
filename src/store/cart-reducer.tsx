
interface State {
    cartItem :Object[]
}

const defState:State={
    cartItem :[]
}

const cart_reducer=(state:State = defState, action:any)=>{
    switch(action.type) {
        case("ADD_TO_CART"):
            return{...state, cartItem:[...state.cartItem, action.payLoad]}
        case("REMOVE_FROM_CART"):
            return{...state, cartItem:state.cartItem.filter(values =>values !==action.payLoad)}
        default :
            return state
    }
}

export default cart_reducer