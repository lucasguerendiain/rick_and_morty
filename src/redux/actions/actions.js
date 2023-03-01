export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
    };
};

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    };
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    };
};
