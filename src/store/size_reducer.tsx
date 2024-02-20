



interface State {
    size : string[]
}
const defState = {
    size : []
}

const size_reducer =(state :State = defState , action :any)=> {
    switch(action.type) {
    case("ADD_SIZE"):
        return {...state , size:[...state.size, action.payLoad]}
    case("REMOVE_SIZE") :
        return {...state, size: state.size.filter(values => values !==action.payLoad)}

        default:
            return state
    }
}


export default size_reducer
