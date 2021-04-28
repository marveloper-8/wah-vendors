import Products from '../../pages/Products'
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'

export const getItems = () => {
    return {
        type: GET_ITEMS,
        // payload: res.data
    }
}

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = product => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}