import {ADD_CAKE, ADD_ICE_CREAM, REMOVE_CAKE, REMOVE_ICE_CREAM} from "./constants";

const initialCakeState = {
    qty: 0,
}

const initialIceCreamState = {
    qty: 0,
}

export const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case ADD_CAKE:
            return {
                qty: state.qty + 1
            }
        case REMOVE_CAKE:
            return {
                qty: state.qty !== 0 ? state.qty - 1 : 0
            }
        default:
            return state
    }
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ADD_ICE_CREAM:
            return {
                qty: state.qty + 1
            }
        case REMOVE_ICE_CREAM:
            return {
                qty: state.qty !== 0 ? state.qty - 1 : 0
            }
        default:
            return state
    }
}
