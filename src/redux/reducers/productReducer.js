import { ActionTypes } from "../type"

const initialState = {
    products: [],
    cart: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload) }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}