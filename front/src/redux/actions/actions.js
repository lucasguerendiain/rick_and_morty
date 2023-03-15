import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";

export const addFavorite = (char) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/fav", char);
            return dispatch({
                        type: ADD_FAVORITE,
                        payload: response.data
                    });
        } catch (error){
            return dispatch({
                type: "ERROR",
                payload: error
            });
        }
    };
};

export const deleteFavorite = (id) => {
    return async function(dispatch) {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
            return dispatch({
                type: DELETE_FAVORITE,
                payload: response.data
            });
        } catch (error){
            return dispatch({
                type: "ERROR",
                payload: error
            });
        }
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

export const getFavorites = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/rickandmorty/fav");
            return dispatch({
                type: GET_FAVORITES,
                payload: response.data
            });
        } catch (error){
            return dispatch({
                type: "ERROR",
                payload: error
            });
        }
    };
};