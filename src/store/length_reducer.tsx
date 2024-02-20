
interface State {
    length :string[]
}

const defState :State = {
    length : []
}



const length_reducer=(state :State = defState , action :any)=> {
    switch(action.type) {
        case("ADD_LENGHT"):
            return{...state, length :[...state.length, action.payLoad]}
        case("REMOVE_LENGHT") :
            return{...state , length:state.length.filter(values => values !== action.payLoad)}

        default :
            return state
    }

}

export default length_reducer