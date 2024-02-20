
interface State {
    brend :string[]
}
const defBrend:State = {
    brend: [] as string[]
}

const brend_reducer =( state: State=defBrend , action:any) => {
    switch(action.type) {
        case ("ADD_BREND") :
            return {...state, brend:[...state.brend, action.payLoad]};
        case("REMOVE_BREND") :
            return { ...state, brend: state.brend.filter(values =>values !==action.payLoad)};

        default:
             return state
    }
}
export default brend_reducer


