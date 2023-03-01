import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                myFavorites: [...state.myFavorites, action.payload]
            };
        case DELETE_FAVORITE:
            return {
                myFavorites: state.myFavorites.filter(x => x.id !== action.payload)
            };
        default:
            return {...state};
    }
};

export default rootReducer;
