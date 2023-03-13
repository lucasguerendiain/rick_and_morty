import styles from "./Favorites.module.css";
import Card from "./Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards, getFavorites } from "../redux/actions/actions";
import { useEffect } from "react";

export function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    const handleSort = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    return (
        <div className={styles.FavDiv}>
            <select name="ordenar" onChange={handleSort}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filtrar" onChange={handleFilter}>
                <option value="allCharacters">All characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            <div className={styles.FavList}>
                {myFavorites && myFavorites.map((char, index) => {
                return <Card 
                    name={char.name} 
                    species={char.species} 
                    gender={char.gender} 
                    image={char.image}
                    event={""} 
                    id={char.id}
                key={"f" + char.id+ index}/>
            })}
            </div>
        </div>
        );
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Favorites);