interface State {
    priceRange :number[]
}

const defState :State ={
    priceRange : []
}

const price_reducer =(state:State=defState,action:any)=>{
    switch(action.type) {
        case("SET_RENGE"):
            return{...state,priceRange:[action.payLoad]}

        default :
        return state
    }
}

export default price_reducer