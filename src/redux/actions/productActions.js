import axios from "axios"
import { ActionTypes } from "../type"


export const setProducts = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            dispatch({
                type: ActionTypes.SET_PRODUCTS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const selectedProduct = (details) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: details
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product
    }
}