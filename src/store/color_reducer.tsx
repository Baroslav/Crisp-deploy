interface State {
    color :string[]
}

const defState:State = {
    color:[]
}

const color_reducer =(state:State = defState,action :any)=>{
    switch(action.type) {
        case("ADD_COLOR") :
            return{...state, color:[...state.color, action.payLoad]}
        case("REMOVE_COLOR"):
            return{...state, color:state.color.filter(values =>values !==action.payLoad)}

        default :
            return state
    }
}

export default color_reducer