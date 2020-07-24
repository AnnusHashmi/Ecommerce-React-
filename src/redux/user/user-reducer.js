import UserActionTypes from './user-action-types';

const { Switch } = require("react-router-dom")

const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser : action.payload
            }
            break;
    
        default:
            return state;
    }
}

export default UserReducer;