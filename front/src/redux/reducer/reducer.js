import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "../actions/actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload
            };
        case FILTER:
            const allChar = [...state.allCharacters];
            const nuevaFiltro = (action.payload === "allCharacters") ? (allChar) : (allChar.filter((char) => char.gender === action.payload));
            return {
                ...state,
                myFavorites: nuevaFiltro
            };
        case ORDER:
            const aux = [...state.myFavorites];
            const nuevaOrden = aux.sort((action.payload === "Ascendente") ? (
                (a,b) => {return a.id - b.id;}
                ) : ((a,b) => {return b.id - a.id}) 
            );
            return {
                ...state,
                myFavorites: nuevaOrden
            };
        default:
            return {...state};
    }
};

export default rootReducer;
