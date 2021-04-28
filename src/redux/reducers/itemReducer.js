import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'
// images
import login_image from '../../images/login.png'

const initialState = {
    products:  [
        {
            id: 1,
            image: login_image,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 2,
            image: login_image,
            value: "Be Refreshed and cooled bottled water",
            price: 1500
        },
        {
            id: 3,
            image: login_image,
            value: "Afrities water Tank",
            price: 2500
        },
        {
            id: 4,
            image: login_image,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 5,
            image: login_image,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 6,
            image: login_image,
            value: "Be Refreshed and cooled bottled water",
            price: 1500
        },
        {
            id: 7,
            image: login_image,
            value: "Afrities water Tank",
            price: 2500
        },
        {
            id: 8,
            image: login_image,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        default:
            return state
    }
}