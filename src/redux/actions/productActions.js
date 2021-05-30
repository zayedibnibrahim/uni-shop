import { ActionTypes } from "../type"


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}