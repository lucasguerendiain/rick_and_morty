export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from "axios";

export const addFavorite = (char) => {
    return function(dispatch) {
        axios
            .post("http://localhost:3001/rickandmorty/fav", char)
            .then((response) => {
                return dispatch({
                    type: ADD_FAVORITE,
                    payload: response.data
                })
            })
    }
};

export const deleteFavorite = (id) => {
    return function(dispatch) {
        axios
            .post(`http://localhost:3001/rickandmorty/fav/${id}`)
            .then((response) => {
                return dispatch({
                    type: DELETE_FAVORITE,
                    payload: response.data
                })
            })
    }
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
