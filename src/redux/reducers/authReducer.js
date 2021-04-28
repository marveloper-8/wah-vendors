import {
    LOGIN,
    GET_USERS,
    REFRESH_AUTH_TOKEN,
    LOGOUT,
    CHANGE_PASSWORD,
    FORGOT_PASSWORD,
    REGISTER,
    SOCIAL_LOGIN,
    VALIDATE_AUTH_TOKEN,
    SEND_AUTH_VERIFICATION_PIN,
    VERIFY_AUTH_PIN
} from '../actions/auth'

const initialState = {
    items: [
        {id: 1, name: 'Eggs'},
        {id: 2, name: 'Milk'},
        {id: 3, name: 'Steak'},
        {id: 4, name: 'Water'},
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch (action.type){
        case LOGIN:
            return{
                ...state
            }
        default:
            return state
    }
}
