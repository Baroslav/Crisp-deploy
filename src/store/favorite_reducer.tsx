interface State {
    favorite : Object[]
}

const defState:State ={
    favorite : []
}


export const favorite_reducer =(state:State =defState ,action:any)=> {
    switch(action.type){
        case("ADD_FAVORITE"):
            return{...state , favorite:[...state.favorite, action.payLoad]}
        case("DELETE_FAVORITE"):
            return{...state, favorite : state.favorite.filter(values => values !==action.payLoad)}
       default:
            return state
    }     
}