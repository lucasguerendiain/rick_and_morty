import styles from "./Favorites.module.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Favorites({ myFavorites }) {
    return (
        <div className={styles.Fav}>
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
        );
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Favorites);