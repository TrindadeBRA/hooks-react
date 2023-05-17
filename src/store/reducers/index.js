export default function reducer(state, action){
    switch(action.type) {
        case 'number2':
            return { ...state, number: state.number + 2 }
        case 'double':
            return { ...state, number: state.number * 2 }
        case 'addCustom':
            return { ...state, number: action.number}
        case 'login':
            return { ...state, user: { name: action.name} }
        default:
            return state
    }
}
