import {ADD_CAKE, ADD_ICE_CREAM, REMOVE_CAKE, REMOVE_ICE_CREAM} from "./constants";

export const addCake = () => {
    return {
        type: ADD_CAKE,
        info: 'Adding cake'
    }
}

export const removeCake = () => {
    return {
        type: REMOVE_CAKE,
        info: 'Removing cake'
    }
}

export const addIceCream = () => {
    return {
        type: ADD_ICE_CREAM,
        info: 'Adding ice cream'
    }
}

export const removeIceCream = () => {
    return {
        type: REMOVE_ICE_CREAM,
        info: 'Removing ice cream'
    }
}

