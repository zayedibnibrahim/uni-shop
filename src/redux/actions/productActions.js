import axios from "axios"
import { ActionTypes } from "../type"


export const setProducts = () => {
    return async (dispatch) => {
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